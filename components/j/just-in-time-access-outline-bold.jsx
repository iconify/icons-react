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
		"content": `<style>.huj3g_bus {
  d: path("M13 17a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.kqawgnb7o {
  d: path("M4 8a4 4 0 1 0 8 0 4 4 0 1 0 -8 0");
}

.r_b-c709a {
  d: path("M20 17v2.5");
}

.rlxl2sbpp {
  d: path("M8 8h2.5");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.xtyo_2ujy {
  d: path("M17 17h4.5");
}

.yq7pxxbcq {
  d: path("M8 5.5V8");
}
</style><g class="s0phu2bbs"><path class="kqawgnb7o"/><path class="yq7pxxbcq"/><path class="rlxl2sbpp"/><path class="huj3g_bus"/><path class="xtyo_2ujy"/><path class="r_b-c709a"/></g>`,
		"fallback": "iconmind:just-in-time-access-outline-bold",
	});
}

export default Component;
