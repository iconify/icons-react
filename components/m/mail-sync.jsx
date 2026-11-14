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

.j6av-jzwx {
  d: path("M9.5 10.75L12 12.5l2.5-1.75m2-6.544a9 9 0 0 1 0 15.588m-9 0a9 9 0 0 1 0-15.588");
}

.nkv422y-f {
  d: path("M9.25 8.75h5.5a1.75 1.75 0 0 1 1.75 1.75v3a1.75 1.75 0 0 1-1.75 1.75h-5.5A1.75 1.75 0 0 1 7.5 13.5v-3a1.75 1.75 0 0 1 1.75-1.75");
}

.t32v96bsd {
  d: path("m18.75 20.5l-2.25-.75l.75-2.25M5 3.5l2.5.75l-.75 2.25");
}
</style><g class="hntgybcog"><path class="nkv422y-f"/><path class="j6av-jzwx"/><path class="t32v96bsd"/></g>`,
		"fallback": "uix:mail-sync",
	});
}

export default Component;
