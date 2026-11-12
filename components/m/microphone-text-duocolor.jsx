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

.ra9l-jb2d {
  d: path("M6 6v6a2 2 0 1 0 4 0V6a2 2 0 1 0-4 0m-3 4v2c0 6.667 10 6.667 10 0v-2m-5 7v4m-4 0h8");
}

.t1w-jib-t {
  stroke-opacity: 0.4;
  d: path("M15 7h6m-3 0v6");
}
</style><g class="nrj6p8qat"><path class="t1w-jib-t"/><path class="ra9l-jb2d"/></g>`,
		"fallback": "coolicons:microphone-text-duocolor",
	});
}

export default Component;
