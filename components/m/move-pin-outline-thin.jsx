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
		"content": `<style>.c_tajwbcn {
  d: path("M12.5 7.5 15 10l-2.5 2.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.jtt8g10_o {
  d: path("M9 10h6");
}

.qad3kqbgr {
  d: path("M4 10a8 8 0 0 1 16 0l-8 8Z");
}
</style><g class="hntgybcog"><path class="qad3kqbgr"/><path class="jtt8g10_o"/><path class="c_tajwbcn"/></g>`,
		"fallback": "iconmind:move-pin-outline-thin",
	});
}

export default Component;
