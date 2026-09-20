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
		"content": `<style>.sziw4ybrq {
  fill: currentColor;
  d: path("M4 3.5A1.5 1.5 0 0 1 5.5 2h7A1.5 1.5 0 0 1 14 3.5v5.522a5.5 5.5 0 0 0-1 .185V3.5a.5.5 0 0 0-.5-.5h-7a.5.5 0 0 0-.5.5v13a.5.5 0 0 0 .5.5h4.1q.276.538.657 1H5.5A1.5 1.5 0 0 1 4 16.5zM9.022 14a5.6 5.6 0 0 0 0 1H7.5a.5.5 0 0 1 0-1zm9.978.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0m-4-2a.5.5 0 0 0-1 0V14h-1.5a.5.5 0 0 0 0 1H14v1.5a.5.5 0 0 0 1 0V15h1.5a.5.5 0 0 0 0-1H15z");
}
</style><path class="sziw4ybrq"/>`,
		"fallback": "fluent:phone-add-20-regular",
	});
}

export default Component;
