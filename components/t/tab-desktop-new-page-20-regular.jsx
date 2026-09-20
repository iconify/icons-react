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
		"content": `<style>.kzdzmyb9k {
  fill: currentColor;
  d: path("M7 12a1 1 0 1 0 0-2a1 1 0 0 0 0 2m4-1a1 1 0 1 1-2 0a1 1 0 0 1 2 0m2 1a1 1 0 1 0 0-2a1 1 0 0 0 0 2M3 5.5A2.5 2.5 0 0 1 5.5 3h9A2.5 2.5 0 0 1 17 5.5v9a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 3 14.5zM5.5 4A1.5 1.5 0 0 0 4 5.5v9A1.5 1.5 0 0 0 5.5 16h9a1.5 1.5 0 0 0 1.5-1.5V7H9.5A1.5 1.5 0 0 1 8 5.5V4zM16 5.5A1.5 1.5 0 0 0 14.5 4H9v1.5a.5.5 0 0 0 .5.5H16z");
}
</style><path class="kzdzmyb9k"/>`,
		"fallback": "fluent:tab-desktop-new-page-20-regular",
	});
}

export default Component;
