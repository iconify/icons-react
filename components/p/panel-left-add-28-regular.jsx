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
		"content": `<style>.l__usdb6m {
  fill: currentColor;
  d: path("M5.75 4A3.75 3.75 0 0 0 2 7.75v11.5A3.75 3.75 0 0 0 5.75 23h7.673a7.5 7.5 0 0 1-.36-1.5h-2.567v-16h11.75a2.25 2.25 0 0 1 2.25 2.25v6.405c.554.35 1.058.769 1.5 1.247V7.75A3.75 3.75 0 0 0 22.247 4zM3.5 7.75A2.25 2.25 0 0 1 5.75 5.5h3.246v16H5.75a2.25 2.25 0 0 1-2.25-2.25zM26.996 20.5a6.5 6.5 0 1 1-13 0a6.5 6.5 0 0 1 13 0m-6-4a.5.5 0 0 0-1 0V20h-3.5a.5.5 0 0 0 0 1h3.5v3.5a.5.5 0 0 0 1 0V21h3.5a.5.5 0 0 0 0-1h-3.5z");
}
</style><path class="l__usdb6m"/>`,
		"fallback": "fluent:panel-left-add-28-regular",
	});
}

export default Component;
