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
		"content": `<style>.x44v_lpxz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.75 10.25h14.5v9.5a1.5 1.5 0 0 1-1.5 1.5H6.25a1.5 1.5 0 0 1-1.5-1.5Zm-.2-.46l-1.6-3.58q-.2-.46.3-.46h5q.5 0 .63.48l.99 3.54q.13.48-.37.48H5.25q-.5 0-.7-.46m14.9 0l1.6-3.58q.2-.46-.3-.46h-5q-.5 0-.63.48l-.99 3.54q-.13.48.37.48h4.25q.5 0 .7-.46M9.5 14h5");
}
</style><path class="x44v_lpxz"/>`,
		"fallback": "iconoven:package-open",
	});
}

export default Component;
