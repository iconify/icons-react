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
		"content": `<style>.cyp-6lnwd {
  d: path("M9.5 12a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0Zm-3 0h3m5 0h3");
}

.rq866kbao {
  d: path("M6.5 12a5.5 5.5 0 1 0 11 0a5.5 5.5 0 1 0-11 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.x9e36qb2f {
  d: path("M3.5 3h17v18h-17Z");
}
</style><g class="ulnmmdpxh"><path class="x9e36qb2f"/><path class="rq866kbao"/><path class="cyp-6lnwd"/></g>`,
		"fallback": "uix-sharp:life-ring-cabinet",
	});
}

export default Component;
