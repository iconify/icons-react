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
		"content": `<style>.q_r5vwbps {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 21c-.6 0-1-.4-1-1c0-2.75 2.9-4.75 6.5-4.75c1.25 0 2.35.25 3.25.75v5ZM5.25 8.25a3.75 3.75 0 1 0 7.5 0a3.75 3.75 0 1 0-7.5 0M15.125 20l.061-.489a1.5 1.5 0 0 1 .428-.875l2.761-2.761a1.237 1.237 0 0 1 1.75 0a1.237 1.237 0 0 1 0 1.75l-2.761 2.761a1.5 1.5 0 0 1-.875.428l-.489.061a.784.784 0 0 1-.875-.875");
}
</style><path class="q_r5vwbps"/>`,
		"fallback": "uix:role-editor",
	});
}

export default Component;
