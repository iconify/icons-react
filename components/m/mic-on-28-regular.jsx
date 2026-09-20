import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":28,"height":28};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.c769pibkc {
  d: path("M14 2a4.5 4.5 0 0 0-4.5 4.5v8a4.5 4.5 0 1 0 9 0v-8A4.5 4.5 0 0 0 14 2zm-3 4.5a3 3 0 1 1 6 0v8a3 3 0 1 1-6 0v-8z");
  fill: currentColor;
}

.ft5dv1b6b {
  fill: none;
}

.seivgccdw {
  d: path("M7.5 13.75a.75.75 0 1 0-1.5 0v.75a8 8 0 0 0 7.25 7.965v2.785a.75.75 0 0 0 1.5 0v-2.785A8 8 0 0 0 22 14.5v-.75a.75.75 0 1 0-1.5 0v.75a6.5 6.5 0 1 1-13 0v-.75z");
  fill: currentColor;
}
</style><g class="ft5dv1b6b"><path class="c769pibkc"/><path class="seivgccdw"/></g>`,
		"fallback": "fluent:mic-on-28-regular",
	});
}

export default Component;
