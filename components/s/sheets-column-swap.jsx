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
		"content": `<style>.u40gf4bae {
  fill: currentColor;
  d: path("M5 9.135V4h6.404v5.135zm1-1h4.404V5H6zM12.577 20v-8.884H19V20zm1-1H18v-2.942h-4.423zm0-3.942H18v-2.942h-4.423zm1.173-5.904v-1h2.537L14.462 5.29l.707-.714L18 7.447V4.865h1v4.288zm-5.925 7.538L6 13.83v2.575H5v-4.288h4.25v1H6.708l2.83 2.869z");
}
</style><path class="u40gf4bae"/>`,
		"fallback": "material-symbols-light:sheets-column-swap",
	});
}

export default Component;
