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
		"content": `<style>.coi-np7dk {
  d: path("M15 9v6");
}

.f6g4tkbvw {
  d: path("m9 9 3 3 -3 3");
}

.hw-0_-irv {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M15 9v6");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.km9uii_ku {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M4 3v18M4 6h16M4 18h16m0 -15v18");
  opacity: var(--svg-opacity--0-2, 0.2);
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

.xjgk2mbyf {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("m9 9 3 3 -3 3");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="s0phu2bbs"><path class="km9uii_ku"/><path class="xjgk2mbyf"/><path class="hw-0_-irv"/><path class="ri2m-q_tv"/><path class="f6g4tkbvw"/><path class="coi-np7dk"/></g>`,
		"fallback": "iconmind:stage-skip-duotone-bold",
	});
}

export default Component;
