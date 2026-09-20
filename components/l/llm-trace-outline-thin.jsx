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
		"content": `<style>.b603-acaz {
  d: path("M10 12h8");
}

.crv4i00bu {
  d: path("M4 3v18");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.nfb4ipisv {
  d: path("M7 7h7");
}

.pqv-otbrp {
  d: path("M13 17h8");
}
</style><g class="hntgybcog"><path class="crv4i00bu"/><path class="nfb4ipisv"/><path class="b603-acaz"/><path class="pqv-otbrp"/></g>`,
		"fallback": "iconmind:llm-trace-outline-thin",
	});
}

export default Component;
