import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.ww24pxj4y {
  fill: currentColor;
  d: path("M3.5 7A1.5 1.5 0 0 0 2 8.5v3A1.5 1.5 0 0 0 3.5 13h4A1.5 1.5 0 0 0 9 11.5v-3A1.5 1.5 0 0 0 7.5 7zm9 0A1.5 1.5 0 0 0 11 8.5v3a1.5 1.5 0 0 0 1.5 1.5h4a1.5 1.5 0 0 0 1.5-1.5v-3A1.5 1.5 0 0 0 16.5 7z");
}
</style><path class="ww24pxj4y"/>`,
		"fallback": "fluent:match-app-layout-20-filled",
	});
}

export default Component;
