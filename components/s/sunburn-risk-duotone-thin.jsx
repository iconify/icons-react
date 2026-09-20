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
		"content": `<style>.b_fzcqbeu {
  d: path("M5 20a7 7 0 0 1 14 0");
}

.ha96dokbt {
  d: path("M5.5 7H8");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.nqq-ml3sz {
  d: path("M16 7h2.5");
}

.rdx3slmde {
  d: path("M8.5 7a3.5 3.5 0 1 0 7 0 3.5 3.5 0 1 0 -7 0");
}

.tm88wrbeh {
  fill: currentColor;
  d: path("M8.5 7a3.5 3.5 0 1 0 7 0 3.5 3.5 0 1 0 -7 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.ui32hib9b {
  d: path("M5 20h14");
}
</style><g class="hntgybcog"><path class="tm88wrbeh"/><path class="rdx3slmde"/><path class="ha96dokbt"/><path class="nqq-ml3sz"/><path class="b_fzcqbeu"/><path class="ui32hib9b"/></g>`,
		"fallback": "iconmind:sunburn-risk-duotone-thin",
	});
}

export default Component;
