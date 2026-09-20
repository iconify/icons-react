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

.huj3g_bus {
  d: path("M13 17a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.kqawgnb7o {
  d: path("M4 8a4 4 0 1 0 8 0 4 4 0 1 0 -8 0");
}

.krwm4ebpd {
  fill: currentColor;
  d: path("M13 17a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.kxc6jxbiv {
  fill: currentColor;
  d: path("M4 8a4 4 0 1 0 8 0 4 4 0 1 0 -8 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.r_b-c709a {
  d: path("M20 17v2.5");
}

.rlxl2sbpp {
  d: path("M8 8h2.5");
}

.xtyo_2ujy {
  d: path("M17 17h4.5");
}

.yq7pxxbcq {
  d: path("M8 5.5V8");
}
</style><g class="hntgybcog"><path class="kxc6jxbiv"/><path class="krwm4ebpd"/><path class="kqawgnb7o"/><path class="yq7pxxbcq"/><path class="rlxl2sbpp"/><path class="huj3g_bus"/><path class="xtyo_2ujy"/><path class="r_b-c709a"/></g>`,
		"fallback": "iconmind:just-in-time-access-duotone-thin",
	});
}

export default Component;
