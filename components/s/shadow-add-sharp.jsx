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
		"content": `<style>.l72h9wr4c {
  fill: currentColor;
  d: path("M13.5 13.5v-3h-3v-1h3v-3h1v3h3v1h-3v3zM3 21V7h3.616V3H21v14.385h-4V21zm4.616-4.615H20V4H7.616z");
}
</style><path class="l72h9wr4c"/>`,
		"fallback": "material-symbols-light:shadow-add-sharp",
	});
}

export default Component;
