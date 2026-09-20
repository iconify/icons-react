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

.izng5ebil {
  d: path("M18.24 8.76a6 6 0 0 1 0 8.5");
}

.kat3by1wu {
  d: path("M16.12 10.88a3 3 0 0 1 0 4.24");
}

.kl15gcoth {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M16.12 10.88a3 3 0 0 1 0 4.24");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.v_bqwbcfx {
  d: path("m11 5 -5 5h4l-5 5");
}

.wp32b-b4l {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("m11 5 -5 5h4l-5 5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.wspsoebse {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M18.24 8.76a6 6 0 0 1 0 8.5");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="hntgybcog"><path class="wp32b-b4l"/><path class="kl15gcoth"/><path class="wspsoebse"/><path class="v_bqwbcfx"/><path class="kat3by1wu"/><path class="izng5ebil"/></g>`,
		"fallback": "iconmind:sound-effect-duotone-thin",
	});
}

export default Component;
