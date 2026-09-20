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

.l0kkv4bte {
  d: path("M7 17 17 7");
}

.oifr9zbpt {
  d: path("M4 20h16");
}

.r3faxubne {
  d: path("M4 4v16");
}

.wdvszqb6r {
  d: path("M7 5v12h12");
}
</style><g class="hntgybcog"><path class="r3faxubne"/><path class="oifr9zbpt"/><path class="wdvszqb6r"/><path class="l0kkv4bte"/></g>`,
		"fallback": "iconmind:metric-cardinality-outline-thin",
	});
}

export default Component;
