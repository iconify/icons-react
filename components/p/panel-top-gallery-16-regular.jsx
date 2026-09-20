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
		"content": `<style>.uvr7unb5d {
  fill: currentColor;
  d: path("M4.5 3A2.5 2.5 0 0 0 2 5.5v5A2.5 2.5 0 0 0 4.5 13h7a2.5 2.5 0 0 0 2.5-2.5v-5A2.5 2.5 0 0 0 11.5 3zM3 5.5A1.5 1.5 0 0 1 4.5 4H6v3H3zM3 8h10v2.5a1.5 1.5 0 0 1-1.5 1.5h-7A1.5 1.5 0 0 1 3 10.5zm10-1h-3V4h1.5A1.5 1.5 0 0 1 13 5.5zM9 4v3H7V4z");
}
</style><path class="uvr7unb5d"/>`,
		"fallback": "fluent:panel-top-gallery-16-regular",
	});
}

export default Component;
