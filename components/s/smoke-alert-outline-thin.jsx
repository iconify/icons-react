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
		"content": `<style>.bos0j4biy {
  d: path("M3 21h18");
}

.gkuwt-n7o {
  d: path("M9 21a3 3 0 0 1 0 -6");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.hqvb0ld9c {
  d: path("M15 18v-5h5v5Z");
}

.qmiganh_y {
  d: path("M9 9a3 3 0 0 1 0 6");
}

.uzqto6b0t {
  d: path("M9 9a3 3 0 0 1 0 -6");
}
</style><g class="hntgybcog"><path class="uzqto6b0t"/><path class="qmiganh_y"/><path class="gkuwt-n7o"/><path class="hqvb0ld9c"/><path class="bos0j4biy"/></g>`,
		"fallback": "iconmind:smoke-alert-outline-thin",
	});
}

export default Component;
