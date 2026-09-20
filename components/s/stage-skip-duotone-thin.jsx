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

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ri2m-q_tv {
  d: path("M4 3v18M4 6h16M4 18h16m0 -15v18");
}

.s4802xbum {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("m9 9 3 3 -3 3");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.u_5xtyu1s {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M15 9v6");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.vws5wpblq {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M4 3v18M4 6h16M4 18h16m0 -15v18");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="hntgybcog"><path class="vws5wpblq"/><path class="s4802xbum"/><path class="u_5xtyu1s"/><path class="ri2m-q_tv"/><path class="f6g4tkbvw"/><path class="coi-np7dk"/></g>`,
		"fallback": "iconmind:stage-skip-duotone-thin",
	});
}

export default Component;
