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
		"content": `<style>.m3li4wbqg {
  fill: currentColor;
  d: path("M8.5 19H21v-4.02H8.5zM3 9.02h4.5V5H3zM3 14h4.5v-3.98H3zm0 5h4.5v-4.02H3zm5.5-5H21v-3.98H8.5zm0-4.98H21V5H8.5z");
}
</style><path class="m3li4wbqg"/>`,
		"fallback": "material-symbols-light:view-list-sharp",
	});
}

export default Component;
