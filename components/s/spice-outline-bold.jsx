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
		"content": `<style>.f_ocwm2xq {
  d: path("M10 10V6h4v4");
}

.fkf_gcbra {
  d: path("M10 15h4");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.ste6xgm2r {
  d: path("M7 10v11h10V10Z");
}

.ugvz7ebru {
  d: path("M10 18h4");
}
</style><g class="s0phu2bbs"><path class="ste6xgm2r"/><path class="f_ocwm2xq"/><path class="fkf_gcbra"/><path class="ugvz7ebru"/></g>`,
		"fallback": "iconmind:spice-outline-bold",
	});
}

export default Component;
