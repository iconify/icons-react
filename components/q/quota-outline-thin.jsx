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

.ud0bjnmvm {
  d: path("M2 12a3 3 0 0 1 3 -3h10a3 3 0 0 1 3 3 3 3 0 0 1 -3 3H5a3 3 0 0 1 -3 -3");
}

.xao2ebc6f {
  d: path("M21 5v14");
}
</style><g class="hntgybcog"><path class="ud0bjnmvm"/><path class="xao2ebc6f"/></g>`,
		"fallback": "iconmind:quota-outline-thin",
	});
}

export default Component;
