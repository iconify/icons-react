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
		"content": `<style>.eq1xvnr2k {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M11.5 9.5 9 12l2.5 2.5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.lpz1dcbuc {
  d: path("M11.5 9.5 9 12l2.5 2.5");
}

.ri2m-q_tv {
  d: path("M4 3v18M4 6h16M4 18h16m0 -15v18");
}

.vws5wpblq {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M4 3v18M4 6h16M4 18h16m0 -15v18");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.wwogglmvt {
  d: path("M9 12h8");
}

.zvtk1r3pr {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M9 12h8");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="hntgybcog"><path class="vws5wpblq"/><path class="zvtk1r3pr"/><path class="eq1xvnr2k"/><path class="ri2m-q_tv"/><path class="wwogglmvt"/><path class="lpz1dcbuc"/></g>`,
		"fallback": "iconmind:rollback-auto-duotone-thin",
	});
}

export default Component;
