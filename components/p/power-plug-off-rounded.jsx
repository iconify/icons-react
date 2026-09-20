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
		"content": `<style>.j2re57b5p {
  fill: currentColor;
  d: path("M11.077 20q-.348 0-.578-.23t-.23-.578v-1.846l-2.79-2.79q-.218-.217-.348-.522Q7 13.729 7 13.406v-3.79q0-.408.17-.76t.616-.57v1.435L2.177 4.092q-.14-.14-.15-.344t.15-.364t.354-.159t.354.16l17.692 17.692q.14.14.15.344t-.15.364t-.354.16t-.354-.16l-5.288-5.289l-.85.85v1.846q0 .349-.23.578t-.578.23zm5.496-5.738L9.346 7.034V4.5q0-.213.144-.357T9.846 4t.357.143q.143.144.143.357V8h3.308V4.5q0-.213.143-.357q.144-.143.357-.143t.357.143t.143.357v4l-.5-.5h1.23q.672 0 1.144.472T17 9.616v3.701q0 .247-.092.474q-.093.228-.272.407z");
}
</style><path class="j2re57b5p"/>`,
		"fallback": "material-symbols-light:power-plug-off-rounded",
	});
}

export default Component;
