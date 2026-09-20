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
		"content": `<style>.ag-dyktzc {
  fill: currentColor;
  d: path("M5 12a7 7 0 1 0 14 0 7 7 0 1 0 -14 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.l0kkv4bte {
  d: path("M7 17 17 7");
}

.mp8d-bcnh {
  d: path("M5 12a7 7 0 1 0 14 0 7 7 0 1 0 -14 0");
}
</style><g class="hntgybcog"><path class="ag-dyktzc"/><path class="mp8d-bcnh"/><path class="l0kkv4bte"/></g>`,
		"fallback": "iconmind:null-value-duotone-thin",
	});
}

export default Component;
