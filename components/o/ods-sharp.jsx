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
		"content": `<style>.d0snlnb8b {
  fill: currentColor;
  d: path("M5.308 14.692h3.384V9.308H5.308zm.884-.884v-3.616h1.616v3.616zm4.116.884h2.788l.596-.615V9.904l-.596-.596h-2.788zm.884-.884v-3.616h1.616v3.616zm4.116.884h3.384v-3.111h-2.5v-1.389h2.5v-.884h-3.384v3.1h2.5v1.4h-2.5zM3 19V5h18v14z");
}
</style><path class="d0snlnb8b"/>`,
		"fallback": "material-symbols-light:ods-sharp",
	});
}

export default Component;
