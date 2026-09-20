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
		"content": `<style>.artopbq8l {
  d: path("M12 7.5v9");
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

.r-6zwcnsc {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M12 7.5v9");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.ri2m-q_tv {
  d: path("M4 3v18M4 6h16M4 18h16m0 -15v18");
}
</style><g class="nrj6p8qat"><path class="n5v54kp1e"/><path class="r-6zwcnsc"/><path class="ri2m-q_tv"/><path class="artopbq8l"/></g>`,
		"fallback": "iconmind:pipeline-gate-duotone-regular",
	});
}

export default Component;
