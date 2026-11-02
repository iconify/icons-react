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
		"content": `<style>.b2_xccbks {
  d: path("M13 6h8m-8 6h8m-8 6h8");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.ye2-fvvej {
  stroke-opacity: 0.4;
  d: path("m3 6l3 3l3-3m0 12l-3-3l-3 3");
}
</style><g class="nrj6p8qat"><path class="ye2-fvvej"/><path class="b2_xccbks"/></g>`,
		"fallback": "coolicons:list-collapse-duocolor-sharp",
	});
}

export default Component;
