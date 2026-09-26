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

.vgp93obyz {
  d: path("M5 4H19C20.65685 4 22 5.34315 22 7V13C22 14.65685 20.65685 16 19 16H5C3.34315 16 2 14.65685 2 13V7C2 5.34315 3.34315 4 5 4ZM12 16V20M8 20H16");
}

.wlnszkoiu {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M5 3H19C21.20914 3 23 4.79086 23 7V13C23 15.20914 21.20914 17 19 17H5C2.79086 17 1 15.20914 1 13V7C1 4.79086 2.79086 3 5 3Z");
  stroke: none;
}
</style><g class="nrj6p8qat"><path class="wlnszkoiu"/><path class="vgp93obyz"/></g>`,
		"fallback": "keyline-icons:monitor-two-tone",
	});
}

export default Component;
