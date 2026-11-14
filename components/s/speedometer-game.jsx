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
		"content": `<style>.vfyblcb3r {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 16.5a9 9 0 0 1 18 0Zm2.75-6.25L7.5 12M12 7.5V10m0 6.5l4.5-4.5M12 16.5h.01");
}
</style><path class="vfyblcb3r"/>`,
		"fallback": "uix:speedometer-game",
	});
}

export default Component;
