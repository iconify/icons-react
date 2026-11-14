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
		"content": `<style>.ryvda3bhf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 2L3.5 12.5h6l-1.5 8l8-11h-5.5Zm2.75 16l2 2L21 15.75");
}
</style><path class="ryvda3bhf"/>`,
		"fallback": "uix:outage-restored",
	});
}

export default Component;
