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
		"content": `<style>.bpsgzvbsw {
  d: path("M13 11h5");
}

.cjsg0ab2y {
  d: path("M2 20h20");
}

.gkj6vbuly {
  d: path("M2 5a2 2 0 0 1 2 -2h16a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2Z");
}

.gwl0nvbom {
  d: path("M6 10a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="gkj6vbuly"/><path class="gwl0nvbom"/><path class="bpsgzvbsw"/><path class="cjsg0ab2y"/></g>`,
		"fallback": "iconmind:long-term-outline-thin",
	});
}

export default Component;
