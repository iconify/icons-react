import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.cqlj_wbgv {
  fill: currentColor;
  d: path("M19 5h-4.621h.029h-.023zm-5.616-1H20v10.385h-1V5h-4.615v15h-1zM4 20V4h6.635v16zM9.635 5H5v14h4.635zm0 0H5zM19 22.23V20h-2.23v-1H19v-2.23h1V19h2.23v1H20v2.23z");
}
</style><path class="cqlj_wbgv"/>`,
		"fallback": "material-symbols-light:splitscreen-vertical-add-outline-sharp",
	});
}

export default Component;
