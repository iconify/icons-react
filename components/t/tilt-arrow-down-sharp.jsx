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
		"content": `<style>.hxvq_hrow {
  fill: currentColor;
  d: path("M4 21V3h16v18zm7-8.825L9.4 10.6L8 12l4 4l4-4l-1.4-1.425l-1.6 1.6V8h-2z");
}
</style><path class="hxvq_hrow"/>`,
		"fallback": "material-symbols:tilt-arrow-down-sharp",
	});
}

export default Component;
