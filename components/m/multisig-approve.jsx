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
		"content": `<style>.ahqn6zbcd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.25 8.25a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 1 0-5.5 0M6 20.5C6 17 8.75 15 12 15c.728 0 1.431.1 2.083.295M2.5 5.5a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0m14.5 0a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0m-14.5 8c0-2 1.25-3.25 4-3.25m11 0c2.525 0 3.785 1.054 3.975 2.774M14.75 18l2 2L21 15.75");
}
</style><path class="ahqn6zbcd"/>`,
		"fallback": "uix:multisig-approve",
	});
}

export default Component;
