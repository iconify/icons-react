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

.ngayx2bsa {
  d: path("M12 7.5V12H8.5M3.75 3.75l16.5 16.5");
}

.xglklabzt {
  cx: 12px;
  cy: 12px;
  r: 8.5px;
}
</style><g class="hntgybcog"><circle class="xglklabzt"/><path class="ngayx2bsa"/></g>`,
		"fallback": "iconoven:time-off",
	});
}

export default Component;
