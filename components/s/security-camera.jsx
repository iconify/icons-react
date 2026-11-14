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
		"content": `<style>.chgkdvbwi {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m7.025 3.713l6.762 1.812a3.5 3.5 0 0 1 2.474 4.287a3.5 3.5 0 0 1-4.286 2.475l-6.762-1.812a3.5 3.5 0 0 1-2.474-4.287a3.5 3.5 0 0 1 4.286-2.475M12 13v4h8m.5-3.5v7M6 8h.01");
}
</style><path class="chgkdvbwi"/>`,
		"fallback": "uix:security-camera",
	});
}

export default Component;
