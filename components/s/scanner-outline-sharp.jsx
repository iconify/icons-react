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
		"content": `<style>.wpy387b5z {
  fill: currentColor;
  d: path("M17.985 13L4.846 8.246l.316-.938L20 12.708V19H4v-6zM19 18v-4H5v4zm-8.846-1.5H17.5v-1h-7.346zM5 18v-4zm1.23-1.23h1.54v-1.54H6.23z");
}
</style><path class="wpy387b5z"/>`,
		"fallback": "material-symbols-light:scanner-outline-sharp",
	});
}

export default Component;
