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
		"content": `<style>.dt5f2_i5d {
  d: path("M4 3h16l-8 8zm8 8v10m-4 0h8");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.w6e_frnyg {
  stroke-opacity: 0.4;
  d: path("M7 6h10");
}
</style><g class="nrj6p8qat"><path class="w6e_frnyg"/><path class="dt5f2_i5d"/></g>`,
		"fallback": "coolicons:martini-duocolor-sharp",
	});
}

export default Component;
