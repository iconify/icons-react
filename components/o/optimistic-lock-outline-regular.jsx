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
		"content": `<style>.nnzlfsekh {
  d: path("M2 8a2 2 0 0 1 2 -2h16a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2Z");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.o95xao2-k {
  d: path("m14 12 2 2 4 -4");
}

.w6105m-jv {
  d: path("M4 12h8");
}
</style><g class="nrj6p8qat"><path class="nnzlfsekh"/><path class="w6105m-jv"/><path class="o95xao2-k"/></g>`,
		"fallback": "iconmind:optimistic-lock-outline-regular",
	});
}

export default Component;
