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

.pv-uocbxg {
  d: path("M18 17H4V3m7 1h9v9");
}

.q76_okbsb {
  stroke-opacity: 0.4;
  d: path("M9 20h6M3 2l19 19");
}
</style><g class="nrj6p8qat"><path class="q76_okbsb"/><path class="pv-uocbxg"/></g>`,
		"fallback": "coolicons:monitor-off-duocolor-sharp",
	});
}

export default Component;
