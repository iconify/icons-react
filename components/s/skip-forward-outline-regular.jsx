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
		"content": `<style>.gtsw5xviq {
  d: path("M17 5v14");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.swmt31b1p {
  d: path("m6 5 7 7 -7 7");
}
</style><g class="nrj6p8qat"><path class="swmt31b1p"/><path class="gtsw5xviq"/></g>`,
		"fallback": "iconmind:skip-forward-outline-regular",
	});
}

export default Component;
