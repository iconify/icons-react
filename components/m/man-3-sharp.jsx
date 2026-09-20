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
		"content": `<style>.b7_64-7kh {
  fill: currentColor;
  d: path("M10 22.25v-7H8v-8h8v8h-2v7zM12 6.5L9.75 4.25L12 2l2.25 2.25z");
}
</style><path class="b7_64-7kh"/>`,
		"fallback": "material-symbols:man-3-sharp",
	});
}

export default Component;
