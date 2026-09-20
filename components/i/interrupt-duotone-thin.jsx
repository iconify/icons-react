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
		"content": `<style>.ef5ubjb0b {
  d: path("M18 2 8 12h5l-8 8");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.s91-42bkk {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M18 2 8 12h5l-8 8");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="hntgybcog"><path class="s91-42bkk"/><path class="ef5ubjb0b"/></g>`,
		"fallback": "iconmind:interrupt-duotone-thin",
	});
}

export default Component;
