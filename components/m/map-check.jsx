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
		"content": `<style>.f2s9bwu9u {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12.323 19.385L9 18l-6 2.5V6l6-2.5L15 6l6-2.5v9.4M9 3.5V18m6-12v3.25M14.75 18l2 2L21 15.75");
}
</style><path class="f2s9bwu9u"/>`,
		"fallback": "uix:map-check",
	});
}

export default Component;
