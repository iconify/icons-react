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
		"content": `<style>.ata5onbgx {
  d: path("M10.5 6v9.5a3.75 3.75 0 0 1-7.5 0v-4l2.75 2.25m9.5.75h5A1.75 1.75 0 0 1 22 16.25v3A1.75 1.75 0 0 1 20.25 21h-5a1.75 1.75 0 0 1-1.75-1.75v-3a1.75 1.75 0 0 1 1.75-1.75");
}

.e0wm0ybiw {
  d: path("M8.75 4.25a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ix40ayy1e {
  d: path("m14.25 15.25l3.5 2.75l3.5-2.75");
}
</style><g class="hntgybcog"><path class="e0wm0ybiw"/><path class="ata5onbgx"/><path class="ix40ayy1e"/></g>`,
		"fallback": "uix:phishing-hook",
	});
}

export default Component;
