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

.le41ikb_c {
  fill: currentColor;
  d: path("M9 6a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.ounpu_b6c {
  d: path("M7 13a5 5 0 0 1 10 0");
}

.pemn838wn {
  d: path("M9 6a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}

.vblqyfbsp {
  d: path("M7 16h10v4H7Z");
}

.wqz83pb_m {
  fill: currentColor;
  d: path("M7 16h10v4H7Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="hntgybcog"><path class="le41ikb_c"/><path class="wqz83pb_m"/><path class="pemn838wn"/><path class="ounpu_b6c"/><path class="vblqyfbsp"/></g>`,
		"fallback": "iconmind:sculpture-duotone-thin",
	});
}

export default Component;
