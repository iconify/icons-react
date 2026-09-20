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

.d6uto1vti {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M8 10h8");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.kxc30sn4p {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M8 14h4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.l0zc9ibud {
  d: path("M8 10h8");
}

.ri2m-q_tv {
  d: path("M4 3v18M4 6h16M4 18h16m0 -15v18");
}

.vws5wpblq {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M4 3v18M4 6h16M4 18h16m0 -15v18");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="hntgybcog"><path class="vws5wpblq"/><path class="d6uto1vti"/><path class="kxc30sn4p"/><path class="ri2m-q_tv"/><path class="l0zc9ibud"/><path class="b8lx3dhmf"/></g>`,
		"fallback": "iconmind:traffic-split-duotone-thin",
	});
}

export default Component;
