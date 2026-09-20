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
		"content": `<style>.p_g11-bmp {
  d: path("M17 18h3");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.tpoo0acuc {
  d: path("M4 8a3 3 0 0 1 6 0");
}

.ve2c5yb5g {
  d: path("M2 10a2 2 0 0 1 2 -2h6a2 2 0 0 1 2 2v7a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2Z");
}

.zc40h1bod {
  d: path("M15 6a2 2 0 0 1 2 -2h3a2 2 0 0 1 2 2v13a2 2 0 0 1 -2 2h-3a2 2 0 0 1 -2 -2Z");
}
</style><g class="s0phu2bbs"><path class="ve2c5yb5g"/><path class="tpoo0acuc"/><path class="zc40h1bod"/><path class="p_g11-bmp"/></g>`,
		"fallback": "iconmind:mfa-outline-bold",
	});
}

export default Component;
