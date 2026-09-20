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
		"content": `<style>.y13j4rz7c {
  fill: currentColor;
  d: path("M9 20v-2H3V4h18v6.5h-9.392l2.35-2.35l-.708-.708L9.692 11l3.558 3.558l.708-.708l-2.35-2.35H21V18h-6v2z");
}
</style><path class="y13j4rz7c"/>`,
		"fallback": "material-symbols-light:reset-tv-sharp",
	});
}

export default Component;
