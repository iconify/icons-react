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
		"content": `<style>.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.tn1qi8beo {
  d: path("M9 15H21M15 9V21M10.5 13.5L9 15L10.5 16.5M19.5 13.5L21 15L19.5 16.5M13.5 10.5L15 9L16.5 10.5M13.5 19.5L15 21L16.5 19.5");
}

.xyguepbqe {
  stroke-opacity: 0.4;
  d: path("M3 6C3 4.34315 4.34315 3 6 3M10 3H13M20 7V6C20 4.34315 18.6569 3 17 3M7 20H6C4.34315 20 3 18.6569 3 17M3 10V13");
}
</style><g class="nrj6p8qat"><path class="xyguepbqe"/><path class="tn1qi8beo"/></g>`,
		"fallback": "keyline-icons:move-dashed-panel-two-tone",
	});
}

export default Component;
