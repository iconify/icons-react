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

.shvec_xgt {
  cx: 12px;
  cy: 12px;
  r: 6.5px;
}

.w-otxkbzi {
  d: path("M9.75 7v10M12 5.5v13M14.25 7v10M10.44 3.14a9 9 0 0 1 9.35 4.36m.3-2.48l-.3 2.48l-2.3-.98m-3.93 14.34a9 9 0 0 1-9.35-4.36m-.3 2.48l.3-2.48l2.3.98");
}
</style><g class="hntgybcog"><circle class="shvec_xgt"/><path class="w-otxkbzi"/></g>`,
		"fallback": "iconoven:polarizer",
	});
}

export default Component;
