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
		"content": `<style>.rclmj10lx {
  fill: currentColor;
  d: path("m10 19l-7-7l7-7zm4 0V5l7 7zm1.5-3.625L18.875 12L15.5 8.625z");
}
</style><path class="rclmj10lx"/>`,
		"fallback": "material-symbols:switch-right-outline-sharp",
	});
}

export default Component;
