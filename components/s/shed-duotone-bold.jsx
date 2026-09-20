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
		"content": `<style>.a6e_o0bju {
  d: path("m3 11 9 -9 9 9");
}

.d-7kibk-t {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M10 20v-6h4v6");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.ga65sabzo {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("m3 11 9 -9 9 9");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.qkzndobnz {
  d: path("M10 20v-6h4v6");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.sv8lhpyik {
  d: path("M5 11v9h14v-9");
}

.zqacdi7pw {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M5 11v9h14v-9");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="s0phu2bbs"><path class="ga65sabzo"/><path class="zqacdi7pw"/><path class="d-7kibk-t"/><path class="a6e_o0bju"/><path class="sv8lhpyik"/><path class="qkzndobnz"/></g>`,
		"fallback": "iconmind:shed-duotone-bold",
	});
}

export default Component;
