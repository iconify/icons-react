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
		"content": `<style>.r3k3zbbnu {
  fill: currentColor;
  d: path("M4.25 19c.69 0 1.25.56 1.25 1.25v4a2.25 2.25 0 0 0 2.25 2.25h4a1.25 1.25 0 1 1 0 2.5h-4A4.75 4.75 0 0 1 3 24.25v-4c0-.69.56-1.25 1.25-1.25m23.5 0c.69 0 1.25.56 1.25 1.25v4A4.75 4.75 0 0 1 24.25 29h-4a1.25 1.25 0 1 1 0-2.5h4a2.25 2.25 0 0 0 2.25-2.25v-4c0-.69.56-1.25 1.25-1.25M16 11.5a4.5 4.5 0 1 1 0 9a4.5 4.5 0 0 1 0-9m0 2.5a2 2 0 1 0 0 4a2 2 0 0 0 0-4M11.75 3a1.25 1.25 0 1 1 0 2.5h-4A2.25 2.25 0 0 0 5.5 7.75v4a1.25 1.25 0 1 1-2.5 0v-4A4.75 4.75 0 0 1 7.75 3zm12.5 0A4.75 4.75 0 0 1 29 7.75v4a1.25 1.25 0 1 1-2.5 0v-4a2.25 2.25 0 0 0-2.25-2.25h-4a1.25 1.25 0 1 1 0-2.5zM9.75 8a1.75 1.75 0 1 1 0 3.5a1.75 1.75 0 0 1 0-3.5");
}
</style><path class="r3k3zbbnu"/>`,
		"fallback": "fluent:search-visual-32-filled",
	});
}

export default Component;
