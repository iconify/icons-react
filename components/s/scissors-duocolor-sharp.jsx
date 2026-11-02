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
		"content": `<style>.dqtszy6sm {
  stroke-opacity: 0.4;
  d: path("M3 6a3 3 0 1 0 6 0a3 3 0 0 0-6 0m0 12a3 3 0 1 0 6 0a3 3 0 0 0-6 0");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.nybt6xb3m {
  d: path("M8.121 15.879L21 3M8.121 8.121L12 12m3 3l6 6");
}
</style><g class="nrj6p8qat"><path class="dqtszy6sm"/><path class="nybt6xb3m"/></g>`,
		"fallback": "coolicons:scissors-duocolor-sharp",
	});
}

export default Component;
