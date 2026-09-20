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

.nfb4ipisv {
  d: path("M7 7h7");
}

.pqv-otbrp {
  d: path("M13 17h8");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}
</style><g class="s0phu2bbs"><path class="crv4i00bu"/><path class="nfb4ipisv"/><path class="b603-acaz"/><path class="pqv-otbrp"/></g>`,
		"fallback": "iconmind:llm-trace-outline-bold",
	});
}

export default Component;
