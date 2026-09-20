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
		"content": `<style>.gnfxbib2f {
  d: path("M6 8h13");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.nyl8f3o_r {
  d: path("M6 13h13");
}

.qe97cg-lx {
  d: path("M3 3v18h18");
}
</style><g class="hntgybcog"><path class="qe97cg-lx"/><path class="gnfxbib2f"/><path class="nyl8f3o_r"/></g>`,
		"fallback": "iconmind:underfit-gap-outline-thin",
	});
}

export default Component;
