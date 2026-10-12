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

.hsg5pubci {
  cx: 12px;
  cy: 14px;
  r: 4.5px;
}

.r6uvok62f {
  cx: 12px;
  cy: 14px;
  r: 7.25px;
}

.t1shncb3t {
  d: path("M9 4.5a4.25 4.25 0 0 1 6 0");
}
</style><g class="hntgybcog"><circle class="r6uvok62f"/><circle class="hsg5pubci"/><path class="t1shncb3t"/></g>`,
		"fallback": "iconoven:smart-ring",
	});
}

export default Component;
