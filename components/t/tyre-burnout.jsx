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
		"content": `<style>.t55d_qb_x {
  d: path("M8.75 10a6.5 6.5 0 1 0 13 0a6.5 6.5 0 1 0-13 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yzduaxcrw {
  d: path("M12 10a3.25 3.25 0 1 0 6.5 0a3.25 3.25 0 1 0-6.5 0Zm-2 11H6a2 2 0 1 1 2-2m-1.25-5h-2.5a2 2 0 1 1 2-2");
}
</style><g class="ulnmmdpxh"><path class="t55d_qb_x"/><path class="yzduaxcrw"/></g>`,
		"fallback": "uix-sharp:tyre-burnout",
	});
}

export default Component;
