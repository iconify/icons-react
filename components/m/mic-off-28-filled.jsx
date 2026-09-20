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
		"content": `<style>.l44_hbb4l {
  fill: currentColor;
  d: path("M19.31 18.25L3.28 2.22a.75.75 0 1 0-1.06 1.06l7.28 7.28v3.94a4.5 4.5 0 0 0 7.39 3.45l1.417 1.418A6.5 6.5 0 0 1 7.5 14.5v-.748a.75.75 0 1 0-1.5 0v.749a8 8 0 0 0 7.25 7.965v2.785a.75.75 0 0 0 1.5 0v-2.785a7.97 7.97 0 0 0 4.62-2.035l5.35 5.35a.75.75 0 0 0 1.06 0a.75.75 0 0 0 0-1.06l-5.397-5.397zm1.881-.24A8 8 0 0 0 22 14.5v-.75a.75.75 0 1 0-1.5 0v.75c0 .837-.158 1.637-.446 2.372zm-2.754-2.755q.062-.37.063-.755v-8a4.5 4.5 0 0 0-8.997-.179z");
}
</style><path class="l44_hbb4l"/>`,
		"fallback": "fluent:mic-off-28-filled",
	});
}

export default Component;
