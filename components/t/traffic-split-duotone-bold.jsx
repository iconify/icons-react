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
		"content": `<style>.b8lx3dhmf {
  d: path("M8 14h4");
}

.gj-xxubvb {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M8 14h4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.h5jfupb3k {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M8 10h8");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.km9uii_ku {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M4 3v18M4 6h16M4 18h16m0 -15v18");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.l0zc9ibud {
  d: path("M8 10h8");
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
</style><g class="s0phu2bbs"><path class="km9uii_ku"/><path class="h5jfupb3k"/><path class="gj-xxubvb"/><path class="ri2m-q_tv"/><path class="l0zc9ibud"/><path class="b8lx3dhmf"/></g>`,
		"fallback": "iconmind:traffic-split-duotone-bold",
	});
}

export default Component;
