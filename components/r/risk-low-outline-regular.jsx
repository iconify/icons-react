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
		"content": `<style>.lmbhihbzq {
  d: path("m12 16 -5 -5");
}

.ng35sb6yg {
  d: path("M3 16a9 9 0 0 1 18 0");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.ys-dg812g {
  d: path("M3 16h18");
}
</style><g class="nrj6p8qat"><path class="ng35sb6yg"/><path class="ys-dg812g"/><path class="lmbhihbzq"/></g>`,
		"fallback": "iconmind:risk-low-outline-regular",
	});
}

export default Component;
