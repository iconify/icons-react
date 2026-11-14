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
		"content": `<style>.cs27-ri9u {
  d: path("m10 3l2 1.75l-1.75 2");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.rlkk-ccbe {
  d: path("M2.5 21.5V17H8v-4.5h5.5V8h6v13.5M17.015 3.886za1.13 1.13 0 0 0 .951.691a.286.286 0 0 1 .163.503a1.13 1.13 0 0 0-.363 1.118a.286.286 0 0 1-.428.311a1.13 1.13 0 0 0-1.176 0a.286.286 0 0 1-.428-.311a1.13 1.13 0 0 0-.363-1.118a.286.286 0 0 1 .163-.503a1.13 1.13 0 0 0 .951-.691a.286.286 0 0 1 .53 0M4 14c0-5 3.5-8.5 8-9.25");
}
</style><g class="hntgybcog"><path class="rlkk-ccbe"/><path class="cs27-ri9u"/></g>`,
		"fallback": "uix:promotion",
	});
}

export default Component;
