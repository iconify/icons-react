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
		"content": `<style>.ayo73pbzj {
  d: path("M2 2L22 22");
}

.hjdw2x5_u {
  stroke-opacity: 0.4;
  d: path("M20.12132 20.12132C19.55871 20.68393 18.79565 21 18 21H6C4.34315 21 3 19.65685 3 18V6C3 5.20435 3.31607 4.44129 3.87868 3.87868M3 9H9M3 15H15M12 12V21M8.65685 3H18C19.65685 3 21 4.34315 21 6V15.34315M14.65685 9H21");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="hjdw2x5_u"/><path class="ayo73pbzj"/></g>`,
		"fallback": "keyline-icons:table-off-duotone",
	});
}

export default Component;
