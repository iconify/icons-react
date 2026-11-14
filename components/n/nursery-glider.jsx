import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.ez9d3ktpn {
  d: path("M6.75 9.5h9.75v9.75M8 13.5v6");
}

.itxyfybyu {
  d: path("M3 17.5q9 5 18 0");
}

.n-9tk3bho {
  d: path("m5.5 3l2 10.5h10");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="n-9tk3bho"/><path class="ez9d3ktpn"/><path class="itxyfybyu"/></g>`,
		"fallback": "uix-sharp:nursery-glider",
	});
}

export default Component;
