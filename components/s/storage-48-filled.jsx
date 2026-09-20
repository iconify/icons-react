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
		"content": `<style>.r0jtwvb6z {
  fill: currentColor;
  d: path("M10.25 14A6.25 6.25 0 0 0 4 20.25v7.5A6.25 6.25 0 0 0 10.25 34h27.5A6.25 6.25 0 0 0 44 27.75v-7.5A6.25 6.25 0 0 0 37.75 14zM32 21a2 2 0 1 1-4 0a2 2 0 0 1 4 0m5 2a2 2 0 1 1 0-4a2 2 0 0 1 0 4");
}
</style><path class="r0jtwvb6z"/>`,
		"fallback": "fluent:storage-48-filled",
	});
}

export default Component;
