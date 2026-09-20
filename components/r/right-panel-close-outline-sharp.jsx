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
		"content": `<style>.b1w1-vy1m {
  fill: currentColor;
  d: path("m7.5 16l4-4l-4-4zm8.5 3h3V5h-3zM5 19h9V5H5zm11 0h3zM3 21V3h18v18z");
}
</style><path class="b1w1-vy1m"/>`,
		"fallback": "material-symbols:right-panel-close-outline-sharp",
	});
}

export default Component;
