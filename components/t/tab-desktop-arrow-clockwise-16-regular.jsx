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
		"content": `<style>.d_1fue4nh {
  fill: currentColor;
  d: path("M4 2a2 2 0 0 0-2 2v3a5 5 0 0 1 1-.584V4a1 1 0 0 1 1-1h3v.75C7 4.44 7.56 5 8.25 5H13v7a1 1 0 0 1-1 1H9.584A5 5 0 0 1 9 14h3a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm9 2H8.25A.25.25 0 0 1 8 3.75V3h4a1 1 0 0 1 1 1M7.75 6.75a.5.5 0 0 1 .5.5V9a.5.5 0 0 1-.5.5H6a.5.5 0 0 1 0-1h.659A3 3 0 1 0 8 11a.5.5 0 0 1 1 0a4 4 0 1 1-1.75-3.308V7.25a.5.5 0 0 1 .5-.5");
}
</style><path class="d_1fue4nh"/>`,
		"fallback": "fluent:tab-desktop-arrow-clockwise-16-regular",
	});
}

export default Component;
