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
		"content": `<style>.gcurcebny {
  d: path("M6 12a6 6 0 1 0 12 0 6 6 0 1 0 -12 0");
}

.gfzmy-bgb {
  fill: currentColor;
  d: path("M6 12a6 6 0 1 0 12 0 6 6 0 1 0 -12 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.r3faxubne {
  d: path("M4 4v16");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.ws1d0fbts {
  d: path("M20 4v16");
}
</style><g class="s0phu2bbs"><path class="gfzmy-bgb"/><path class="gcurcebny"/><path class="r3faxubne"/><path class="ws1d0fbts"/></g>`,
		"fallback": "iconmind:plate-duotone-bold",
	});
}

export default Component;
