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

.r7xk8o29f {
  d: path("M12 4v16");
}

.sxlwlmkmh {
  d: path("M4 12h16");
}
</style><g class="hntgybcog"><path class="r7xk8o29f"/><path class="sxlwlmkmh"/></g>`,
		"fallback": "iconmind:plus-outline-thin",
	});
}

export default Component;
