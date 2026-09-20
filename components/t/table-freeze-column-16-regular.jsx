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
		"content": `<style>.kp6uyibdo {
  fill: currentColor;
  d: path("M4.5 2A2.5 2.5 0 0 0 2 4.5v7A2.5 2.5 0 0 0 4.5 14h7a2.5 2.5 0 0 0 2.5-2.5v-7A2.5 2.5 0 0 0 11.5 2zM10 13H6v-2h4zm0-3H6V6h4zm0-5H6V3h4zm1 1h2v4h-2zm0 5h2v.5a1.5 1.5 0 0 1-1.5 1.5H11zm2-6.5V5h-2V3h.5A1.5 1.5 0 0 1 13 4.5M4.5 13A1.5 1.5 0 0 1 3 11.5v-7A1.5 1.5 0 0 1 4.5 3H5v10z");
}
</style><path class="kp6uyibdo"/>`,
		"fallback": "fluent:table-freeze-column-16-regular",
	});
}

export default Component;
