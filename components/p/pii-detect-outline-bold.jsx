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
		"content": `<style>.bo51iypxr {
  d: path("M10 12a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.de_2l4bkn {
  d: path("M7 12h3");
}

.moha5wbmp {
  d: path("M22 12a12.5 12.5 0 0 1 -20 0");
}

.oe2rn1bbo {
  d: path("M14 12h3");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.yix-58bnj {
  d: path("M2 12a12.5 12.5 0 0 1 20 0");
}
</style><g class="s0phu2bbs"><path class="yix-58bnj"/><path class="moha5wbmp"/><path class="bo51iypxr"/><path class="de_2l4bkn"/><path class="oe2rn1bbo"/></g>`,
		"fallback": "iconmind:pii-detect-outline-bold",
	});
}

export default Component;
