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

.iiqs2_7xi {
  d: path("M9 12v6");
}

.iy612dbwv {
  d: path("M18 4v4");
}

.kzxwn_jgc {
  d: path("M15 12v6");
}

.ohhz_s35v {
  d: path("M12 12v6");
}

.t7ig_mg-l {
  d: path("M2 10a2 2 0 0 1 2 -2h16a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2Z");
}

.v9wjrcboq {
  d: path("M4 8V3h10v5");
}
</style><g class="hntgybcog"><path class="t7ig_mg-l"/><path class="v9wjrcboq"/><path class="iy612dbwv"/><path class="iiqs2_7xi"/><path class="ohhz_s35v"/><path class="kzxwn_jgc"/></g>`,
		"fallback": "iconmind:till-count-outline-thin",
	});
}

export default Component;
