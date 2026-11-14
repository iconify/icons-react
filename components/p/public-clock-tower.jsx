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
		"content": `<style>.e-m7gwwzb {
  d: path("M6.5 21.5V8L12 2.5L17.5 8v13.5ZM5 8h14M4.5 21.5h15");
}

.kmqlzfbzn {
  d: path("M12 12.5V14h1.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ygq9ny9jm {
  d: path("M8.5 14a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0Z");
}
</style><g class="ulnmmdpxh"><path class="e-m7gwwzb"/><path class="ygq9ny9jm"/><path class="kmqlzfbzn"/></g>`,
		"fallback": "uix-sharp:public-clock-tower",
	});
}

export default Component;
