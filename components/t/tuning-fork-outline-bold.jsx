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
		"content": `<style>.ffs26fbkv {
  d: path("M12 17v4");
}

.ftej-1ggr {
  d: path("M8 3v10");
}

.o3x_gzblq {
  d: path("m8 13 4 4 4 -4");
}

.p_xsqcbww {
  d: path("M16 3v10");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}
</style><g class="s0phu2bbs"><path class="ftej-1ggr"/><path class="p_xsqcbww"/><path class="o3x_gzblq"/><path class="ffs26fbkv"/></g>`,
		"fallback": "iconmind:tuning-fork-outline-bold",
	});
}

export default Component;
