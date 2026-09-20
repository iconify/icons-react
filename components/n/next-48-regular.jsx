import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.jorwpdbuh {
  fill: currentColor;
  d: path("M39.5 7.25a1.25 1.25 0 0 1 2.5 0v33.5a1.25 1.25 0 1 1-2.5 0zM6 9.257v29.487c0 2.615 2.931 4.16 5.088 2.68l21.504-14.743c1.883-1.29 1.883-4.07 0-5.36L11.088 6.576C8.93 5.098 6 6.642 6 9.257m3.674-.618l21.504 14.743a.75.75 0 0 1 0 1.237L9.674 39.363a.75.75 0 0 1-1.174-.618V9.257a.75.75 0 0 1 1.174-.618");
}
</style><path class="jorwpdbuh"/>`,
		"fallback": "fluent:next-48-regular",
	});
}

export default Component;
