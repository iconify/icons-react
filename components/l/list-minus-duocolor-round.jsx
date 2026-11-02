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
		"content": `<style>.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.qn_u12b2i {
  d: path("M3 6h11M3 11h11M3 16h7");
}

.s1fz_26ri {
  stroke-opacity: 0.4;
  d: path("M15 15h6");
}
</style><g class="nrj6p8qat"><path class="s1fz_26ri"/><path class="qn_u12b2i"/></g>`,
		"fallback": "coolicons:list-minus-duocolor-round",
	});
}

export default Component;
