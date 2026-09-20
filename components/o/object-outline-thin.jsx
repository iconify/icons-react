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

.k6t-okb_f {
  d: path("M9 4 7 6v4l-2 2 2 2v4l2 2");
}

.urk2115hi {
  d: path("m15 4 2 2v4l2 2 -2 2v4l-2 2");
}
</style><g class="hntgybcog"><path class="k6t-okb_f"/><path class="urk2115hi"/></g>`,
		"fallback": "iconmind:object-outline-thin",
	});
}

export default Component;
