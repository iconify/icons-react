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
		"content": `<style>.esz0ytbwn {
  d: path("M8 17a4 4 0 1 0 8 0 4 4 0 1 0 -8 0");
}

.hj3gyvb8c {
  d: path("M9.5 6 12 3.5 14.5 6");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.x18f3082o {
  d: path("M12 3.5V10");
}

.yt7qsrz-s {
  fill: currentColor;
  d: path("M8 17a4 4 0 1 0 8 0 4 4 0 1 0 -8 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="hntgybcog"><path class="yt7qsrz-s"/><path class="esz0ytbwn"/><path class="x18f3082o"/><path class="hj3gyvb8c"/></g>`,
		"fallback": "iconmind:price-up-duotone-thin",
	});
}

export default Component;
