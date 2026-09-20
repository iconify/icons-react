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
		"content": `<style>.cuyn6tgcc {
  fill: currentColor;
}

.e783_m30a {
  d: path("M7.5 6a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5zM8 9V7h4v2zm0 3.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5");
}

.tml441l0k {
  d: path("M8 1.5a.5.5 0 0 0-1 0V3H5.5A1.5 1.5 0 0 0 4 4.5v7a.5.5 0 0 0 .084.277L6 14.651V16.5A1.5 1.5 0 0 0 7.5 18h5a1.5 1.5 0 0 0 1.5-1.5v-1.849l1.916-2.874A.5.5 0 0 0 16 11.5v-7A1.5 1.5 0 0 0 14.5 3H8zM5.5 4h9a.5.5 0 0 1 .5.5v6.849l-1.916 2.874A.5.5 0 0 0 13 14.5v2a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-.084-.277L5 11.349V4.5a.5.5 0 0 1 .5-.5");
}
</style><g class="cuyn6tgcc"><path class="e783_m30a"/><path class="tml441l0k"/></g>`,
		"fallback": "fluent:walkie-talkie-20-regular",
	});
}

export default Component;
