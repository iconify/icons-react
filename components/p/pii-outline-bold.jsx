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
		"content": `<style>.axsqg_b2b {
  d: path("M15 12h4");
}

.gsl5knvuq {
  d: path("M15 8h6");
}

.ppbx_abyw {
  d: path("M6 8a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}

.rjbfcabog {
  d: path("M17 16h4");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.tvr_k_bbt {
  d: path("M4 19a5 5 0 0 1 10 0");
}
</style><g class="s0phu2bbs"><path class="ppbx_abyw"/><path class="tvr_k_bbt"/><path class="gsl5knvuq"/><path class="axsqg_b2b"/><path class="rjbfcabog"/></g>`,
		"fallback": "iconmind:pii-outline-bold",
	});
}

export default Component;
