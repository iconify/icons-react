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
		"content": `<style>.finuhbbre {
  stroke-opacity: 0.4;
  d: path("M12 8v8");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.p5nti_atx {
  d: path("M8 9V7a4 4 0 1 1 8 0v2m-8 6v2a4 4 0 1 0 8 0v-2");
}
</style><g class="nrj6p8qat"><path class="finuhbbre"/><path class="p5nti_atx"/></g>`,
		"fallback": "coolicons:link-vertical-duocolor-round",
	});
}

export default Component;
