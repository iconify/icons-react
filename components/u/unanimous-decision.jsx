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
		"content": `<style>.robpjgwmb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m4.5 6.5l3 3l7-7M7 12.5l3 3l7-7m-7.5 10l3 3l7-7");
}
</style><path class="robpjgwmb"/>`,
		"fallback": "uix:unanimous-decision",
	});
}

export default Component;
