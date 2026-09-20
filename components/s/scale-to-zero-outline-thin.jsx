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
		"content": `<style>.f_0n8xbzv {
  d: path("m5 7 6 6 8 8");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.qe97cg-lx {
  d: path("M3 3v18h18");
}
</style><g class="hntgybcog"><path class="qe97cg-lx"/><path class="f_0n8xbzv"/></g>`,
		"fallback": "iconmind:scale-to-zero-outline-thin",
	});
}

export default Component;
