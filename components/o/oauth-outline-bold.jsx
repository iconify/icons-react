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
		"content": `<style>.g9_x3sqrx {
  d: path("M6 14h4");
}

.hubgvrbhc {
  d: path("M2 14a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.k8_tyfz0x {
  d: path("M8 11a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v7a2 2 0 0 1 -2 2H10a2 2 0 0 1 -2 -2Z");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.utjpr2bvm {
  d: path("M11 9a4 4 0 0 1 8 0");
}
</style><g class="s0phu2bbs"><path class="k8_tyfz0x"/><path class="utjpr2bvm"/><path class="hubgvrbhc"/><path class="g9_x3sqrx"/></g>`,
		"fallback": "iconmind:oauth-outline-bold",
	});
}

export default Component;
