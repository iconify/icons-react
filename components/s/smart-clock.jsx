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

.lkua-1lrf {
  d: path("M12 10.25v3.25h3");
}

.ngsx42bza {
  d: path("M5 13.5a7 7 0 1 0 14 0a7 7 0 1 0-14 0M3 8a3.75 3.75 0 0 1 5-5Zm13-5a3.75 3.75 0 0 1 5 5Z");
}
</style><g class="hntgybcog"><path class="ngsx42bza"/><path class="lkua-1lrf"/></g>`,
		"fallback": "uix:smart-clock",
	});
}

export default Component;
