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
		"content": `<style>.rfm-cdc0o {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m2.5 20.5l7.5-13l4 5.5l2.5-3l5 10.5Zm7.5-13v-5l5.5 2l-5.5 2");
}
</style><path class="rfm-cdc0o"/>`,
		"fallback": "uix:summit-flag",
	});
}

export default Component;
