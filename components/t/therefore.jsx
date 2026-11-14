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
		"content": `<style>.h6j0kqbbf {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M10 6.5q0-2 2-2t2 2t-2 2t-2-2M6 15q-2 0-2 2t2 2t2-2t-2-2m10 2q0-2 2-2t2 2t-2 2t-2-2");
}
</style><path class="h6j0kqbbf"/>`,
		"fallback": "uix-solid:therefore",
	});
}

export default Component;
