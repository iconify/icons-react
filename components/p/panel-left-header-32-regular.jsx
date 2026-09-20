import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.ewdx-lbiu {
  fill: currentColor;
  d: path("M6.5 4A4.5 4.5 0 0 0 2 8.5v15A4.5 4.5 0 0 0 6.5 28h19a4.5 4.5 0 0 0 4.5-4.5v-15A4.5 4.5 0 0 0 25.5 4zm5.5 9h16v10.5a2.5 2.5 0 0 1-2.5 2.5H12zm16-2H12V6h13.5A2.5 2.5 0 0 1 28 8.5zM6.5 6H10v20H6.5A2.5 2.5 0 0 1 4 23.5v-15A2.5 2.5 0 0 1 6.5 6");
}
</style><path class="ewdx-lbiu"/>`,
		"fallback": "fluent:panel-left-header-32-regular",
	});
}

export default Component;
