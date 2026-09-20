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
		"content": `<style>.adx_66b5y {
  d: path("M13 7v3");
}

.askgmhbjk {
  d: path("M3 7a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.po3ky8ubk {
  fill: currentColor;
  d: path("M3 7a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.t5z055brv {
  d: path("M7 7h8");
}

.w2dozdlxo {
  d: path("M2 14a2 2 0 0 1 2 -2h16a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2Z");
}

.wmp4kccwc {
  fill: currentColor;
  d: path("M2 14a2 2 0 0 1 2 -2h16a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="s0phu2bbs"><path class="po3ky8ubk"/><path class="wmp4kccwc"/><path class="askgmhbjk"/><path class="t5z055brv"/><path class="adx_66b5y"/><path class="w2dozdlxo"/></g>`,
		"fallback": "iconmind:primary-key-duotone-bold",
	});
}

export default Component;
