import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.j9o8fsq1i {
  fill: currentColor;
  d: path("M1.75 7.5a.75.75 0 0 1 .75.75V9a.5.5 0 0 0 .5.5h.75a.75.75 0 0 1 0 1.5H3a2 2 0 0 1-2-2v-.75a.75.75 0 0 1 .75-.75m8.5 0a.75.75 0 0 1 .75.75V9a2 2 0 0 1-2 2h-.75a.75.75 0 0 1 0-1.5H9a.5.5 0 0 0 .5-.5v-.75a.75.75 0 0 1 .75-.75m-2.5-2.25a.75.75 0 0 1 0 1.5h-3.5a.75.75 0 0 1 0-1.5zM3.75 1a.75.75 0 0 1 0 1.5H3a.5.5 0 0 0-.5.5v.75a.75.75 0 0 1-1.5 0V3a2 2 0 0 1 2-2zM9 1a2 2 0 0 1 2 2v.75a.75.75 0 0 1-1.5 0V3a.5.5 0 0 0-.5-.5h-.75a.75.75 0 0 1 0-1.5z");
}
</style><path class="j9o8fsq1i"/>`,
		"fallback": "fluent:scan-dash-12-filled",
	});
}

export default Component;
