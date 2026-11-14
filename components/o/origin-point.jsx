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

.lao25xf0o {
  fill: currentColor;
  d: path("M10 9.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0");
}

.qgak1bhch {
  d: path("M12 21.5s6.5-6 6.5-12a6.5 6.5 0 0 0-13 0c0 6 6.5 12 6.5 12");
}
</style><g class="hntgybcog"><path class="qgak1bhch"/><path class="lao25xf0o"/></g>`,
		"fallback": "uix:origin-point",
	});
}

export default Component;
