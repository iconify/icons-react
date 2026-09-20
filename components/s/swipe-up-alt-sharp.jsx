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
		"content": `<style>.xe3b-1oio {
  fill: currentColor;
  d: path("M8.818 17.682Q7.5 16.363 7.5 14.5q0-1.748 1.138-3.005t2.862-1.472V4.921L9.4 7.016l-.708-.708L12 3l3.308 3.308l-.708.713l-2.1-2.1v5.102q1.725.216 2.863 1.472T16.5 14.5q0 1.864-1.318 3.182T12 19t-3.182-1.318");
}
</style><path class="xe3b-1oio"/>`,
		"fallback": "material-symbols-light:swipe-up-alt-sharp",
	});
}

export default Component;
