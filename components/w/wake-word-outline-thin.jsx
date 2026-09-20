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

.jq9hovbrs {
  d: path("M14 4h5a3 3 0 0 1 3 3v7a3 3 0 0 1 -3 3H5a3 3 0 0 1 -3 -3V7a3 3 0 0 1 3 -3h5");
}

.uxtx6q9dp {
  d: path("M13.5 8 11 10.5h2.5L11 13");
}

.yomctlb4k {
  d: path("M7 17v4l4 -4");
}
</style><g class="hntgybcog"><path class="jq9hovbrs"/><path class="yomctlb4k"/><path class="uxtx6q9dp"/></g>`,
		"fallback": "iconmind:wake-word-outline-thin",
	});
}

export default Component;
