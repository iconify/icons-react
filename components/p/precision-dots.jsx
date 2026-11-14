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
		"content": `<style>.u-ngokhtw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 4h.01M12 4h.01M20 4h.01M4 12h.01M20 12h.01M4 20h.01M12 20h.01M20 20h.01M12 8.5v7M8.5 12h7");
}
</style><path class="u-ngokhtw"/>`,
		"fallback": "uix:precision-dots",
	});
}

export default Component;
