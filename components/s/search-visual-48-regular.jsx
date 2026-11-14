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
		"content": `<style>.co011dv3y {
  fill: currentColor;
  d: path("M7.25 28c.69 0 1.25.56 1.25 1.25v6.5a3.75 3.75 0 0 0 3.75 3.75h6.5a1.25 1.25 0 1 1 0 2.5h-6.5A6.25 6.25 0 0 1 6 35.75v-6.5c0-.69.56-1.25 1.25-1.25m33.5 0c.69 0 1.25.56 1.25 1.25v6.5A6.25 6.25 0 0 1 35.75 42h-6.5a1.25 1.25 0 1 1 0-2.5h6.5a3.75 3.75 0 0 0 3.75-3.75v-6.5c0-.69.56-1.25 1.25-1.25M24 18.5a5.5 5.5 0 1 1 0 11a5.5 5.5 0 0 1 0-11m0 2.5a3 3 0 1 0 0 6a3 3 0 0 0 0-6M18.75 6a1.25 1.25 0 1 1 0 2.5h-6.5a3.75 3.75 0 0 0-3.75 3.75v6.5a1.25 1.25 0 1 1-2.5 0v-6.5A6.25 6.25 0 0 1 12.25 6zm17 0A6.25 6.25 0 0 1 42 12.25v6.5a1.25 1.25 0 1 1-2.5 0v-6.5a3.75 3.75 0 0 0-3.75-3.75h-6.5a1.25 1.25 0 1 1 0-2.5zM15 13a2 2 0 1 1 0 4a2 2 0 0 1 0-4");
}
</style><path class="co011dv3y"/>`,
		"fallback": "fluent:search-visual-48-regular",
	});
}

export default Component;
