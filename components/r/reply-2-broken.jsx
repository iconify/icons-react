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
		"content": `<style>.y7l4j2u2p {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.5 7L4.5 12L9.5 17M4.5 12L11 12M14.5 12C16.1667 12 19.5 11 19.5 7");
}
</style><path class="y7l4j2u2p"/>`,
		"fallback": "solar:reply-2-broken",
	});
}

export default Component;
