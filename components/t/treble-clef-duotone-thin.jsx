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
		"content": `<style>.hdjzq9uud {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M12 21c-2 0 -3 -2 -3 -4 0 -4 6 -7 6 -11 0 -2 -2 -3 -3 -2 -2 1 -2 4 -1 7 1 4 3 6 3 8");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.lj7v0wbyu {
  fill: currentColor;
  d: path("M9 16a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.rbc7uabny {
  d: path("M12 21c-2 0 -3 -2 -3 -4 0 -4 6 -7 6 -11 0 -2 -2 -3 -3 -2 -2 1 -2 4 -1 7 1 4 3 6 3 8");
}

.vleiqby2b {
  d: path("M9 16a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}
</style><g class="hntgybcog"><path class="lj7v0wbyu"/><path class="hdjzq9uud"/><path class="rbc7uabny"/><path class="vleiqby2b"/></g>`,
		"fallback": "iconmind:treble-clef-duotone-thin",
	});
}

export default Component;
