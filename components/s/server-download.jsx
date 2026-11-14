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
		"content": `<style>.p3xsdcc7x {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.625 2.5h12.75A2.625 2.625 0 0 1 21 5.125v.25A2.625 2.625 0 0 1 18.375 8H5.625A2.625 2.625 0 0 1 3 5.375v-.25A2.625 2.625 0 0 1 5.625 2.5m0 8.25h12.75A2.625 2.625 0 0 1 21 13.375v.25a2.625 2.625 0 0 1-2.625 2.625H5.625A2.625 2.625 0 0 1 3 13.625v-.25a2.625 2.625 0 0 1 2.625-2.625m.875-5.5h.01M6.5 13.5h.01M12 16.25v5.25M9.5 19l2.5 2.5l2.5-2.5");
}
</style><path class="p3xsdcc7x"/>`,
		"fallback": "uix:server-download",
	});
}

export default Component;
