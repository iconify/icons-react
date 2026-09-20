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
		"content": `<style>.exo7_tbos {
  fill: currentColor;
  d: path("M17 6a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3zm-3-2a2 2 0 0 1 2 2H4a2 2 0 0 1 2-2zM4 10.5h12V13H4zm0-1V7h12v2.5zM6 16a2 2 0 0 1-2-2h12a2 2 0 0 1-2 2z");
}
</style><path class="exo7_tbos"/>`,
		"fallback": "fluent:layout-row-four-20-regular",
	});
}

export default Component;
