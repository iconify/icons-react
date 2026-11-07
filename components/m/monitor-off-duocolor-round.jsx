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
		"content": `<style>.czt_7wbte {
  d: path("M17.647 16.647A4 4 0 0 1 16 17H8a4 4 0 0 1-4-4V8c0-1.36.679-2.561 1.716-3.284M11 4h5a4 4 0 0 1 4 4v5");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.q76_okbsb {
  stroke-opacity: 0.4;
  d: path("M9 20h6M3 2l19 19");
}
</style><g class="nrj6p8qat"><path class="q76_okbsb"/><path class="czt_7wbte"/></g>`,
		"fallback": "coolicons:monitor-off-duocolor-round",
	});
}

export default Component;
