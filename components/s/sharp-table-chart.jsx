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
		"content": `<style>.e4wevifyn {
  fill: currentColor;
  d: path("M10 10.02h5V21h-5zM17 21h5V10h-5zm5-18H3v5h19zM3 21h5V10H3z");
}
</style><path class="e4wevifyn"/>`,
		"fallback": "ic:sharp-table-chart",
	});
}

export default Component;
