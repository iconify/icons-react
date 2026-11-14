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
		"content": `<style>.k8n0zybps {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 17a9.5 4 0 1 0 19 0a9.5 4 0 1 0-19 0M12 9.5V17M8.5 6a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0");
}
</style><path class="k8n0zybps"/>`,
		"fallback": "uix:virtual-joystick",
	});
}

export default Component;
