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
		"content": `<style>.ndceont_o {
  d: path("M4 5a2 2 0 0 1 2 -2h6a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2H6a2 2 0 0 1 -2 -2Z");
}

.ph1z-dbce {
  d: path("M16 9a3 3 0 0 1 0 6");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.wc-2105jm {
  d: path("M16 5a7 7 0 0 1 0 14");
}

.y57_ubc6r {
  fill: currentColor;
  d: path("M4 5a2 2 0 0 1 2 -2h6a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2H6a2 2 0 0 1 -2 -2Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="s0phu2bbs"><path class="y57_ubc6r"/><path class="ndceont_o"/><path class="ph1z-dbce"/><path class="wc-2105jm"/></g>`,
		"fallback": "iconmind:roaming-duotone-bold",
	});
}

export default Component;
