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
		"content": `<style>.kn-4tic2i {
  d: path("M4 21V3h10l6 6v12Z");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.t8qnl-bvo {
  d: path("M14 3v6h6");
}
</style><g class="nrj6p8qat"><path class="kn-4tic2i"/><path class="t8qnl-bvo"/></g>`,
		"fallback": "iconmind:page-turn-outline-regular",
	});
}

export default Component;
