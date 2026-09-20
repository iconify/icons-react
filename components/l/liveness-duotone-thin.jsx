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
		"content": `<style>.f5vgpdbqu {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M5 6h3l2 -2 4 4 2 -2h3");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.oa7ibkb8p {
  d: path("M14.32 10a5.5 5.5 0 1 1 -4.64 0");
}

.t7zftseod {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M14.32 10a5.5 5.5 0 1 1 -4.64 0");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.wxfc8bn6j {
  d: path("M5 6h3l2 -2 4 4 2 -2h3");
}
</style><g class="hntgybcog"><path class="f5vgpdbqu"/><path class="t7zftseod"/><path class="wxfc8bn6j"/><path class="oa7ibkb8p"/></g>`,
		"fallback": "iconmind:liveness-duotone-thin",
	});
}

export default Component;
