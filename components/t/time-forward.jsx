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

.kk_gz9o8o {
  d: path("M20.25 12a8.25 8.25 0 1 1-2.42-5.83l2.42 2.08");
}

.uwmpbukkr {
  d: path("M20.25 3.75v4.5h-4.5M12 7.75V12l-3 1.75");
}
</style><g class="hntgybcog"><path class="kk_gz9o8o"/><path class="uwmpbukkr"/></g>`,
		"fallback": "iconoven:time-forward",
	});
}

export default Component;
