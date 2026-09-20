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
		"content": `<style>.f5d6h4bjf {
  d: path("m7 5 5 5 5 -5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.w08657bnd {
  d: path("M9 5a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}

.wrji4lgnj {
  d: path("M12 8v7");
}

.zd1mml6it {
  d: path("m8 19 4 -4 4 4");
}
</style><g class="hntgybcog"><path class="w08657bnd"/><path class="wrji4lgnj"/><path class="f5d6h4bjf"/><path class="zd1mml6it"/></g>`,
		"fallback": "iconmind:stretch-outline-thin",
	});
}

export default Component;
