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
		"content": `<style>.iei65lbbc {
  d: path("M3 20v-4h18v4M11 4h10v8H11Zm5 8v4");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.w1oesmbrj {
  stroke-opacity: 0.4;
  d: path("m3 6l2-2l2 2m-4 4l2 2l2-2");
}
</style><g class="nrj6p8qat"><path class="w1oesmbrj"/><path class="iei65lbbc"/></g>`,
		"fallback": "coolicons:standing-desk-duocolor-sharp",
	});
}

export default Component;
