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
		"content": `<style>.n2hc-3bxb {
  d: path("M3 4h18M3 9h18M3 14h5m-5 5h5");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.wx9p5uqgi {
  stroke-opacity: 0.4;
  d: path("M12 17a5 5 0 1 0 10 0a5 5 0 0 0-10 0m5-2v2h2");
}
</style><g class="nrj6p8qat"><path class="wx9p5uqgi"/><path class="n2hc-3bxb"/></g>`,
		"fallback": "coolicons:logs-duocolor-round",
	});
}

export default Component;
