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
		"content": `<style>.wx6bj0efx {
  fill: currentColor;
  d: path("M9 20v-8.4L14.6 6h-2.25V4H18v5.65h-2V7.4l-5 5V20z");
}
</style><path class="wx6bj0efx"/>`,
		"fallback": "material-symbols:turn-slight-right-outline-sharp",
	});
}

export default Component;
