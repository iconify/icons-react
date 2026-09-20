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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.kw1bmjbqj {
  d: path("M16 8v7");
}

.n-fiqpbfy {
  d: path("M12 10v5");
}

.r3uulhbhd {
  d: path("M8 12v3");
}

.ri2m-q_tv {
  d: path("M4 3v18M4 6h16M4 18h16m0 -15v18");
}
</style><g class="hntgybcog"><path class="ri2m-q_tv"/><path class="r3uulhbhd"/><path class="n-fiqpbfy"/><path class="kw1bmjbqj"/></g>`,
		"fallback": "iconmind:progressive-delivery-outline-thin",
	});
}

export default Component;
