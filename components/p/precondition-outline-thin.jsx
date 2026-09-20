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

.nm5qv_blq {
  d: path("m2 12 2.5 2.5L9 10");
}

.ypbm17ngv {
  d: path("M12 7a2 2 0 0 1 2 -2h6a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-6a2 2 0 0 1 -2 -2Z");
}
</style><g class="hntgybcog"><path class="nm5qv_blq"/><path class="ypbm17ngv"/></g>`,
		"fallback": "iconmind:precondition-outline-thin",
	});
}

export default Component;
