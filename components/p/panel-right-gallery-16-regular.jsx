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
		"content": `<style>.xw2nlccny {
  fill: currentColor;
  d: path("M14 5.5A2.5 2.5 0 0 0 11.5 3h-7A2.5 2.5 0 0 0 2 5.5v5A2.5 2.5 0 0 0 4.5 13h7a2.5 2.5 0 0 0 2.5-2.5zm-1 0V6h-3V4h1.5A1.5 1.5 0 0 1 13 5.5M10 9V7h3v2zm0 1h3v.5a1.5 1.5 0 0 1-1.5 1.5H10zM9 4v8H4.5A1.5 1.5 0 0 1 3 10.5v-5A1.5 1.5 0 0 1 4.5 4z");
}
</style><path class="xw2nlccny"/>`,
		"fallback": "fluent:panel-right-gallery-16-regular",
	});
}

export default Component;
