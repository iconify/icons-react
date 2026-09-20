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
		"content": `<style>.f82fyxx5n {
  fill: currentColor;
  d: path("M7 21v-3.762q-1.425-1.3-2.212-2.922T4 10.986q0-3.327 2.333-5.657T12 3q2.702 0 4.884 1.645t2.83 4.25L20.992 14H18v5h-4v2zm4.5-7.5h1v-6h-1zm3-1.5h1V8.5h-1zm-6-.5h1v-3h-1z");
}
</style><path class="f82fyxx5n"/>`,
		"fallback": "material-symbols-light:mindfulness-sharp",
	});
}

export default Component;
