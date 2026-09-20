import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.bzzddd6wm {
  fill: currentColor;
  d: path("M6.5 4.5a2 2 0 0 0-2 2v3.25a1.25 1.25 0 1 1-2.5 0V6.5A4.5 4.5 0 0 1 6.5 2h3.25a1.25 1.25 0 1 1 0 2.5zm0 23a2 2 0 0 1-2-2v-3.25a1.25 1.25 0 1 0-2.5 0v3.25A4.5 4.5 0 0 0 6.5 30h3.25a1.25 1.25 0 1 0 0-2.5zm21-21a2 2 0 0 0-2-2h-3.25a1.25 1.25 0 1 1 0-2.5h3.25A4.5 4.5 0 0 1 30 6.5v3.25a1.25 1.25 0 1 1-2.5 0zm-2 21a2 2 0 0 0 2-2v-3.25a1.25 1.25 0 1 1 2.5 0v3.25a4.5 4.5 0 0 1-4.5 4.5h-3.25a1.25 1.25 0 1 1 0-2.5zM8.25 16c0-.69.56-1.25 1.25-1.25h13a1.25 1.25 0 1 1 0 2.5h-13c-.69 0-1.25-.56-1.25-1.25");
}
</style><path class="bzzddd6wm"/>`,
		"fallback": "fluent:scan-dash-32-filled",
	});
}

export default Component;
