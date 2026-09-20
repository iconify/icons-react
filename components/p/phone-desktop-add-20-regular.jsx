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
		"content": `<style>.c9fepxbdi {
  fill: currentColor;
  d: path("M19 5.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0m-4-2a.5.5 0 0 0-1 0V5h-1.5a.5.5 0 0 0 0 1H14v1.5a.5.5 0 0 0 1 0V6h1.5a.5.5 0 0 0 0-1H15zm2 7.5v-.6a5.5 5.5 0 0 0 1-.657V11a2 2 0 0 1-2 2h-3v2h1.5a.5.5 0 0 1 0 1H9v-1h3v-2H9v-1h7a1 1 0 0 0 1-1m-6.743-9A5.5 5.5 0 0 0 9.6 3H6a1 1 0 0 0-1 1v3H4V4a2 2 0 0 1 2-2zM4 15.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5m-2-6A1.5 1.5 0 0 1 3.5 8h3A1.5 1.5 0 0 1 8 9.5v7A1.5 1.5 0 0 1 6.5 18h-3A1.5 1.5 0 0 1 2 16.5zM3.5 9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5z");
}
</style><path class="c9fepxbdi"/>`,
		"fallback": "fluent:phone-desktop-add-20-regular",
	});
}

export default Component;
