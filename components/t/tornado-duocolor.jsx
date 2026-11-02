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
		"content": `<style>.lno0446aq {
  stroke-opacity: 0.4;
  d: path("M10 16h6m-7 4h2");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.q1dwl61-n {
  d: path("M3 4h18M6 8h12m-9 4h10");
}
</style><g class="nrj6p8qat"><path class="lno0446aq"/><path class="q1dwl61-n"/></g>`,
		"fallback": "coolicons:tornado-duocolor",
	});
}

export default Component;
