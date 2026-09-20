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
		"content": `<style>.dioapeb7d {
  fill: currentColor;
  d: path("m7 20l-5-5l5-5l1.4 1.425L5.825 14H13v2H5.825L8.4 18.575zm10-6l-1.4-1.425L18.175 10H11V8h7.175L15.6 5.425L17 4l5 5z");
}
</style><path class="dioapeb7d"/>`,
		"fallback": "material-symbols:swap-horiz-outline",
	});
}

export default Component;
