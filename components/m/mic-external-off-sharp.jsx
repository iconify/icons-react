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
		"content": `<style>.aky0_66jf {
  fill: currentColor;
  d: path("M9.5 6.65L5.35 2.5q.35-.275.775-.387T7 2q1.25 0 2.125.862T10 5q0 .45-.137.863T9.5 6.65M20 17.15l-2-2V4h-4v7.15l-2-2V2h8zM6 22v-4H5L4 8h1.15L.7 3.5l1.4-1.4l19.8 19.8l-1.4 1.4l-6.5-6.5V22zm6-2v-5.2l-2.45-2.45L9 18H8v2z");
}
</style><path class="aky0_66jf"/>`,
		"fallback": "material-symbols:mic-external-off-sharp",
	});
}

export default Component;
