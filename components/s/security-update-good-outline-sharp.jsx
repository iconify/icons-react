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
		"content": `<style>.yafgdqjyh {
  fill: currentColor;
  d: path("m11.05 15l-2.8-2.8l1.4-1.4l1.4 1.4l3.55-3.55l1.4 1.4zM5 23V1h14v22zm2-3v1h10v-1zm0-2h10V6H7zM7 4h10V3H7zm0 0V3zm0 16v1z");
}
</style><path class="yafgdqjyh"/>`,
		"fallback": "material-symbols:security-update-good-outline-sharp",
	});
}

export default Component;
