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
		"content": `<style>.hko8amb7e {
  d: path("M15.5 9h5v4L18 15.5 15.5 13Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.jv2_c8bpo {
  fill: currentColor;
  d: path("M15.5 9h5v4L18 15.5 15.5 13Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.kr5if0b2e {
  fill: currentColor;
  d: path("M6 8a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.ppbx_abyw {
  d: path("M6 8a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}

.v-u0ijc7h {
  d: path("M3 21a6 6 0 0 1 12 0");
}
</style><g class="hntgybcog"><path class="kr5if0b2e"/><path class="jv2_c8bpo"/><path class="ppbx_abyw"/><path class="v-u0ijc7h"/><path class="hko8amb7e"/></g>`,
		"fallback": "iconmind:user-shield-duotone-thin",
	});
}

export default Component;
