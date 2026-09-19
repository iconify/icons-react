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
		"content": `<style>.dxk4d9y5y {
  fill: currentColor;
  d: path("M6 19h4V5H6zm8-14v14h4V5z");
}
</style><path class="dxk4d9y5y"/>`,
		"fallback": "ic:pause",
	});
}

export default Component;
