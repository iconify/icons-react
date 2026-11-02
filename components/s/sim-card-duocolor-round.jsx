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

.q7ih-tbzz {
  d: path("M5 12V7a4 4 0 0 1 4-4h4c1.28 0 2.36.36 3 1l2 2c.64.64 1 1.72 1 3v8a4 4 0 0 1-4 4H9a4 4 0 0 1-4-4z");
}

.tts-evwoe {
  stroke-opacity: 0.4;
  d: path("M9 11a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2Zm0 2h6");
}
</style><g class="nrj6p8qat"><path class="tts-evwoe"/><path class="q7ih-tbzz"/></g>`,
		"fallback": "coolicons:sim-card-duocolor-round",
	});
}

export default Component;
