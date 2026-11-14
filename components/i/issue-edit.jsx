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
		"content": `<style>.rto7xq4vs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M11 19a8 8 0 1 1 8-8m-8 0h.01m4.115 9.25l.061-.489a1.5 1.5 0 0 1 .428-.875l3.011-3.011a1.237 1.237 0 0 1 1.75 0a1.237 1.237 0 0 1 0 1.75l-3.011 3.011a1.5 1.5 0 0 1-.875.428l-.489.061a.784.784 0 0 1-.875-.875");
}
</style><path class="rto7xq4vs"/>`,
		"fallback": "uix:issue-edit",
	});
}

export default Component;
