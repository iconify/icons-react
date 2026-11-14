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

.lhlp04o7v {
  d: path("M11.25 11.5h1.5a1.75 1.75 0 0 1 1.75 1.75v1A1.75 1.75 0 0 1 12.75 16h-1.5a1.75 1.75 0 0 1-1.75-1.75v-1a1.75 1.75 0 0 1 1.75-1.75m-.75 0v-1a1.5 1.5 0 0 1 3 0v1");
}

.q3wixnhae {
  d: path("M3 7a2 2 0 0 1 2-2h4.5l2 2H19a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z");
}
</style><g class="hntgybcog"><path class="q3wixnhae"/><path class="lhlp04o7v"/></g>`,
		"fallback": "uix:top-secret-folder",
	});
}

export default Component;
