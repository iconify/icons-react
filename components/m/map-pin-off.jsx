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
		"content": `<style>.dxcm-ab6w {
  d: path("M8.5 21h7");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.q71tojf4b {
  cx: 12px;
  cy: 8.25px;
  r: 5.5px;
}

.se8pm3_-l {
  cx: 12px;
  cy: 8.25px;
  r: 2px;
}

.zs3o2ob7q {
  d: path("M12 13.75v4.75");
}
</style><g class="hntgybcog"><circle class="q71tojf4b"/><path class="zs3o2ob7q"/><circle class="se8pm3_-l"/><path class="dxcm-ab6w"/></g>`,
		"fallback": "iconoven:map-pin-off",
	});
}

export default Component;
