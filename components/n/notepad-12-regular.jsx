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
		"content": `<style>.w5cgtr44w {
  fill: currentColor;
  d: path("M4 4.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 0-1h-3a.5.5 0 0 0-.5.5M4.5 7a.5.5 0 0 1 0-1h3a.5.5 0 0 1 0 1zM4 8.5a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0-.5.5m0-7a.5.5 0 0 1 1 0V2h2v-.5a.5.5 0 0 1 1 0V2a2 2 0 0 1 2 2v4l-3 3H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zM7 10V8.5a.5.5 0 0 1 .5-.5H9V4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1z");
}
</style><path class="w5cgtr44w"/>`,
		"fallback": "fluent:notepad-12-regular",
	});
}

export default Component;
