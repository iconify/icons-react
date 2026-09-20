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
		"content": `<style>.rqhpy9bgc {
  fill: currentColor;
  d: path("M4 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm3 1v.5A1.5 1.5 0 0 0 8.5 5H13v7a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm6 1H8.5a.5.5 0 0 1-.5-.5V3h4a1 1 0 0 1 1 1");
}
</style><path class="rqhpy9bgc"/>`,
		"fallback": "fluent:tab-desktop-16-regular",
	});
}

export default Component;
