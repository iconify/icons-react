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
		"content": `<style>.g05e12-_z {
  d: path("M21 13v6H3V5h8");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.q6g0-bbmu {
  stroke-opacity: 0.4;
  d: path("m3 5l6 6h4m2-5a3 3 0 1 0 6 0a3 3 0 0 0-6 0");
}
</style><g class="nrj6p8qat"><path class="q6g0-bbmu"/><path class="g05e12-_z"/></g>`,
		"fallback": "coolicons:mail-dot-duocolor-sharp",
	});
}

export default Component;
