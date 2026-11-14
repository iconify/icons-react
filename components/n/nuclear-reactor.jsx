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
		"content": `<style>.wdmsgpbex {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 21V11a8 8 0 0 1 16 0v10Zm5-9v6m3-6v6m3-6v6");
}
</style><path class="wdmsgpbex"/>`,
		"fallback": "uix:nuclear-reactor",
	});
}

export default Component;
