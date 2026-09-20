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
		"content": `<style>.b603-acaz {
  d: path("M10 12h8");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.wuvisubmw {
  d: path("M8 3v18");
}

.y4_6s7b5v {
  d: path("M4 5a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2H6a2 2 0 0 1 -2 -2Z");
}

.ze3hawb4v {
  d: path("M14 6v12");
}
</style><g class="nrj6p8qat"><path class="y4_6s7b5v"/><path class="wuvisubmw"/><path class="ze3hawb4v"/><path class="b603-acaz"/></g>`,
		"fallback": "iconmind:ledger-outline-regular",
	});
}

export default Component;
