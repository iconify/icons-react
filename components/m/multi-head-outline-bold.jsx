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
		"content": `<style>.d8c5u6bor {
  d: path("M7 3v5");
}

.jc5wb8hwy {
  d: path("m12 11 4 4 -4 4 -4 -4Z");
}

.phg4z53le {
  d: path("M17 3v5");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.uvgrx_yvv {
  d: path("M12 3v5");
}
</style><g class="s0phu2bbs"><path class="d8c5u6bor"/><path class="uvgrx_yvv"/><path class="phg4z53le"/><path class="jc5wb8hwy"/></g>`,
		"fallback": "iconmind:multi-head-outline-bold",
	});
}

export default Component;
