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
		"content": `<style>.xv3y31twc {
  fill: currentColor;
  d: path("M13.5 18V6H18v12zM6 18V6h4.5v12zm8.5-1H17V7h-2.5zM7 17h2.5V7H7zM7 7v10zm7.5 0v10z");
}
</style><path class="xv3y31twc"/>`,
		"fallback": "material-symbols-light:pause-outline",
	});
}

export default Component;
