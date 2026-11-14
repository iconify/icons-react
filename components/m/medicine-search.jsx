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

.qchc9hjmv {
  d: path("M2.5 10a7.5 7.5 0 1 0 15 0a7.5 7.5 0 1 0-15 0m13 5.5L21 21");
}

.u9_vgnv3v {
  d: path("M12.828 7.172za2 2 0 0 1 0 2.828L10 12.828a2 2 0 0 1-2.828 0a2 2 0 0 1 0-2.828L10 7.172a2 2 0 0 1 2.828 0M8.586 8.586l2.828 2.828");
}
</style><g class="hntgybcog"><path class="qchc9hjmv"/><path class="u9_vgnv3v"/></g>`,
		"fallback": "uix:medicine-search",
	});
}

export default Component;
