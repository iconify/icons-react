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
		"content": `<style>.b1oaml2mj {
  fill: currentColor;
  d: path("M10 22.25v-7H8v-6q0-.825.588-1.412T10 7.25h4q.825 0 1.413.588T16 9.25v6h-2v7zM12 6.5L9.75 4.25L12 2l2.25 2.25z");
}
</style><path class="b1oaml2mj"/>`,
		"fallback": "material-symbols:man-3",
	});
}

export default Component;
