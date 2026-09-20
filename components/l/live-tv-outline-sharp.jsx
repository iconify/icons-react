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
		"content": `<style>.pu4dtc7hn {
  fill: currentColor;
  d: path("M10 14.577L15.577 11L10 7.423zM9 20v-2H3V4h18v14h-6v2zm-5-3h16V5H4zm0 0V5z");
}
</style><path class="pu4dtc7hn"/>`,
		"fallback": "material-symbols-light:live-tv-outline-sharp",
	});
}

export default Component;
