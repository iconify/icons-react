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
		"content": `<style>.dt1fxgk8s {
  d: path("M8 18.75c0-5.25 8-4.5 8-9.75");
}

.gtheb4n6v {
  d: path("M14.5 7.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ugs6g_mvm {
  d: path("M7 2.5h10A3.5 3.5 0 0 1 20.5 6v12a3.5 3.5 0 0 1-3.5 3.5H7A3.5 3.5 0 0 1 3.5 18V6A3.5 3.5 0 0 1 7 2.5");
}
</style><g class="hntgybcog"><path class="ugs6g_mvm"/><path class="dt1fxgk8s"/><path class="gtheb4n6v"/></g>`,
		"fallback": "uix:map-story",
	});
}

export default Component;
