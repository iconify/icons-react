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
		"content": `<style>.rmmzo6boe {
  fill: currentColor;
  d: path("M10.23 21.75v-6.57H8.463V7.674h7.077v7.5h-1.77v6.577zM12 6.308l-1.942-1.942L12 2.423l1.942 1.943z");
}
</style><path class="rmmzo6boe"/>`,
		"fallback": "material-symbols-light:man-3-outline-sharp",
	});
}

export default Component;
