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
		"content": `<style>.ikuhedoan {
  stroke-opacity: 0.4;
  d: path("m15 15l2 2l4-4");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.qn_u12b2i {
  d: path("M3 6h11M3 11h11M3 16h7");
}
</style><g class="nrj6p8qat"><path class="ikuhedoan"/><path class="qn_u12b2i"/></g>`,
		"fallback": "coolicons:list-check-duocolor",
	});
}

export default Component;
