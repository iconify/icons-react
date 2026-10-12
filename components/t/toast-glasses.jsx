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
		"content": `<style>.aqtay6b5s {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m3.79 6.37l6.42 1.01q.79.12.31.76l-3.54 4.72q-.48.64-.83-.08l-2.8-5.81q-.35-.72.44-.6m16.42 0l-6.42 1.01q-.79.12-.31.76l3.54 4.72q.48.64.83-.08l2.8-5.81q.35-.72-.44-.6M6.5 13.5l-1 7.75m-2.5 0h5m9.5-7.75l1 7.75m-2.5 0h5m-9-18.5v2M9.25 3.5l1 1.25m4.5-1.25l-1 1.25");
}
</style><path class="aqtay6b5s"/>`,
		"fallback": "iconoven:toast-glasses",
	});
}

export default Component;
