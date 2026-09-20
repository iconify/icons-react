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

.lwsfc75mg {
  fill: currentColor;
  d: path("M18 3a10 10 0 1 0 0 18 12 12 0 0 1 0 -18");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.qni2dqmcs {
  d: path("M18 3a10 10 0 1 0 0 18 12 12 0 0 1 0 -18");
}
</style><g class="hntgybcog"><path class="lwsfc75mg"/><path class="qni2dqmcs"/></g>`,
		"fallback": "iconmind:moon-duotone-thin",
	});
}

export default Component;
