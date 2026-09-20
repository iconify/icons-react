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
		"content": `<style>.h5sy48j_j {
  d: path("m16 9 -4 -4v12a3 3 0 1 1 -6 0 3 3 0 1 1 6 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.p811yjdmt {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("m16 9 -4 -4v12a3 3 0 1 1 -6 0 3 3 0 1 1 6 0");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="hntgybcog"><path class="p811yjdmt"/><path class="h5sy48j_j"/></g>`,
		"fallback": "iconmind:music-gen-duotone-thin",
	});
}

export default Component;
