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
		"content": `<style>.u9injubud {
  fill: currentColor;
  d: path("M6.308 14.692h.884v-4.5h1.616v3h.884v-3h1.616v4.5h.884V9.308H6.308zm7.5 0h.884v-1.5h3V9.308h-3.884zm.884-2.384v-2.116h2.116v2.116zM4 20V4h16v16z");
}
</style><path class="u9injubud"/>`,
		"fallback": "material-symbols-light:mp-sharp",
	});
}

export default Component;
