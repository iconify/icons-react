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
		"content": `<style>.l-e75ynwg {
  fill: currentColor;
  d: path("M10.923 17.039V6.961H21v10.077zm-3.961 0v-1.231h1.23v1.23zm0-8.847v-1.23h1.23v1.23zM3 17.038v-1.23h1.23v1.23zm0-4.423v-1.23h1.23v1.23zm0-4.423v-1.23h1.23v1.23z");
}
</style><path class="l-e75ynwg"/>`,
		"fallback": "material-symbols-light:move-selection-right",
	});
}

export default Component;
