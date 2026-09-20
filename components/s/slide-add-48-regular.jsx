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
		"content": `<style>.v_ykc6cth {
  fill: currentColor;
  d: path("M4 14.25A6.25 6.25 0 0 1 10.25 8h27.5A6.25 6.25 0 0 1 44 14.25v11.37a13 13 0 0 0-2.5-1.88v-9.49a3.75 3.75 0 0 0-3.75-3.75h-27.5a3.75 3.75 0 0 0-3.75 3.75v19.5a3.75 3.75 0 0 0 3.75 3.75h11.99c.17.867.424 1.704.756 2.5H10.25A6.25 6.25 0 0 1 4 33.75zM46 35c0 6.075-4.925 11-11 11s-11-4.925-11-11s4.925-11 11-11s11 4.925 11 11m-10-7a1 1 0 1 0-2 0v6h-6a1 1 0 1 0 0 2h6v6a1 1 0 1 0 2 0v-6h6a1 1 0 1 0 0-2h-6z");
}
</style><path class="v_ykc6cth"/>`,
		"fallback": "fluent:slide-add-48-regular",
	});
}

export default Component;
