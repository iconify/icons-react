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
		"content": `<style>.ykz5wobtd {
  fill: currentColor;
  d: path("M4 19.385v-6h16v6zm0-8.77v-6h16v6zm15-5H5v4h14z");
}
</style><path class="ykz5wobtd"/>`,
		"fallback": "material-symbols-light:splitscreen-bottom-sharp",
	});
}

export default Component;
