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
		"content": `<style>.lpz1dcbuc {
  d: path("M11.5 9.5 9 12l2.5 2.5");
}

.ri2m-q_tv {
  d: path("M4 3v18M4 6h16M4 18h16m0 -15v18");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.wwogglmvt {
  d: path("M9 12h8");
}
</style><g class="s0phu2bbs"><path class="ri2m-q_tv"/><path class="wwogglmvt"/><path class="lpz1dcbuc"/></g>`,
		"fallback": "iconmind:rollback-auto-outline-bold",
	});
}

export default Component;
