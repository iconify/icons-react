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
		"content": `<style>.nbmf7yfgr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10 2.5h6A3.5 3.5 0 0 1 19.5 6v12a3.5 3.5 0 0 1-3.5 3.5h-6A3.5 3.5 0 0 1 6.5 18V6A3.5 3.5 0 0 1 10 2.5m-7 4h6.25M3 12h6.25M3 17.5h6.25m3.25-2V13m2.5 2.5V9m2.5 6.5V11");
}
</style><path class="nbmf7yfgr"/>`,
		"fallback": "uix:report-binder",
	});
}

export default Component;
