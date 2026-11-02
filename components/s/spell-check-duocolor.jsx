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
		"content": `<style>.ann0lpb9l {
  stroke-opacity: 0.4;
  d: path("m12 17l3 3l6-6");
}

.ldhmjcjud {
  d: path("M3 9a3 3 0 1 0 6 0a3 3 0 0 0-6 0m6-3v6m4-8v8m0-3a3 3 0 1 0 6 0a3 3 0 0 0-6 0");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="ann0lpb9l"/><path class="ldhmjcjud"/></g>`,
		"fallback": "coolicons:spell-check-duocolor",
	});
}

export default Component;
