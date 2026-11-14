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
		"content": `<style>.i0tu4-bqh {
  d: path("M3.773 19.25a9.5 9.5 0 1 1 16.454 0M12 14.5l4.5-6");
}

.j411z_byo {
  d: path("M10.5 14.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Zm-7 6.5h17");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="i0tu4-bqh"/><path class="j411z_byo"/></g>`,
		"fallback": "uix-sharp:threat-level",
	});
}

export default Component;
