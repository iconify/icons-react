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
		"content": `<style>.j0mhzyszz {
  fill: currentColor;
  d: path("M4 20h12.23v-9.384H4zm13.23-5.616v-1H20V4H7.77v5.616h-1V3H21v11.385zM3 21V9.616h14.23V21zm7.116-5.692");
}
</style><path class="j0mhzyszz"/>`,
		"fallback": "material-symbols-light:select-window-2-outline-sharp",
	});
}

export default Component;
