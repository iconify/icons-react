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
		"content": `<style>.hcvlqjd1c {
  d: path("M4 21.5V10a8 8 0 0 1 16 0v11.5m-17.5 0h19");
}

.hja1_qbxg {
  d: path("M9 16v-3.5a3 3 0 0 1 6 0V16m-7.5 0h9");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="hcvlqjd1c"/><path class="hja1_qbxg"/></g>`,
		"fallback": "uix-sharp:vacuum-no-sound",
	});
}

export default Component;
