import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.cbuxiobpv {
  d: path("M5.5 4.5a2.5 2.5 0 0 1 5 0V8a2.5 2.5 0 0 1-5 0V4.5zM8 3a1.5 1.5 0 0 0-1.5 1.5V8a1.5 1.5 0 1 0 3 0V4.5A1.5 1.5 0 0 0 8 3z");
  fill: currentColor;
}

.ft5dv1b6b {
  fill: none;
}

.satn0jbrd {
  d: path("M4 7.5a.5.5 0 0 1 .5.5a3.5 3.5 0 1 0 7 0a.5.5 0 0 1 1 0a4.5 4.5 0 0 1-4 4.473V13.5a.5.5 0 0 1-1 0v-1.027A4.5 4.5 0 0 1 3.5 8a.5.5 0 0 1 .5-.5z");
  fill: currentColor;
}
</style><g class="ft5dv1b6b"><path class="cbuxiobpv"/><path class="satn0jbrd"/></g>`,
		"fallback": "fluent:mic-on-16-regular",
	});
}

export default Component;
