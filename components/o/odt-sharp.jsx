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
		"content": `<style>.d8jr0zchf {
  fill: currentColor;
  d: path("M5.308 14.692h3.384V9.308H5.308zm.884-.884v-3.616h1.616v3.616zm4.116.884h2.788l.596-.615V9.904l-.596-.596h-2.788zm.884-.884v-3.616h1.616v3.616zm5.174.884h.884v-4.5h1.25v-.884h-3.384v.884h1.25zM3 19V5h18v14z");
}
</style><path class="d8jr0zchf"/>`,
		"fallback": "material-symbols-light:odt-sharp",
	});
}

export default Component;
