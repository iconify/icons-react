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

.osr_65bii {
  stroke-opacity: 0.4;
  d: path("m3 6l2 2l4-4m-6 8l2 2l4-4m-6 8l2 2l4-4");
}
</style><g class="nrj6p8qat"><path class="osr_65bii"/><path class="b2_xccbks"/></g>`,
		"fallback": "coolicons:list-checklist-duocolor-round",
	});
}

export default Component;
