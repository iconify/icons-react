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
		"content": `<style>.l-ev7zb3x {
  fill: currentColor;
  d: path("m17.5 16.5l-1.425-1.4l2.1-2.1H3v-2h15.175L16.1 8.9l1.425-1.4L22 12z");
}
</style><path class="l-ev7zb3x"/>`,
		"fallback": "material-symbols:trending-flat",
	});
}

export default Component;
