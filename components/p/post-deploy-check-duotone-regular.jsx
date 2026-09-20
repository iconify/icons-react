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
		"content": `<style>.e5k2eotmk {
  d: path("M9 11a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.ei5j_bckv {
  d: path("M11.5 11.5 15 15");
}

.n5v54kp1e {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M4 3v18M4 6h16M4 18h16m0 -15v18");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.ri2m-q_tv {
  d: path("M4 3v18M4 6h16M4 18h16m0 -15v18");
}

.txqgcyphc {
  fill: currentColor;
  d: path("M9 11a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.u0picd0gk {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M11.5 11.5 15 15");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="nrj6p8qat"><path class="txqgcyphc"/><path class="n5v54kp1e"/><path class="u0picd0gk"/><path class="ri2m-q_tv"/><path class="e5k2eotmk"/><path class="ei5j_bckv"/></g>`,
		"fallback": "iconmind:post-deploy-check-duotone-regular",
	});
}

export default Component;
