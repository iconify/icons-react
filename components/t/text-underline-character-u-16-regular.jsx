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
		"content": `<style>.p3t4g6b4t {
  fill: currentColor;
  d: path("M5.5 2.5a.5.5 0 0 0-1 0v5a3.5 3.5 0 1 0 7 0v-5a.5.5 0 0 0-1 0v5a2.5 2.5 0 0 1-5 0zM4.5 13a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1z");
}
</style><path class="p3t4g6b4t"/>`,
		"fallback": "fluent:text-underline-character-u-16-regular",
	});
}

export default Component;
