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

.ko3miyo_i {
  d: path("M2.5 19q2.25-1.5 4.75 0T12 19t4.75 0t4.75 0");
}

.xecgc-6uv {
  d: path("M3.5 7a1.5 3 0 1 0 3 0a1.5 3 0 1 0-3 0m14 0a1.5 3 0 1 0 3 0a1.5 3 0 1 0-3 0");
}

.z-mdtq6dp {
  d: path("M9.5 21.5V11C9.5 7 8 4 5 4m9.5 17.5V11c0-4 1.5-7 4.5-7");
}
</style><g class="hntgybcog"><path class="ko3miyo_i"/><path class="z-mdtq6dp"/><path class="xecgc-6uv"/></g>`,
		"fallback": "uix:rice-paddy",
	});
}

export default Component;
