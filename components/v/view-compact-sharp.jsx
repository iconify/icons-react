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
		"content": `<style>.cbvah06vk {
  fill: currentColor;
  d: path("M22 19.75V4.25zm-20-11v-4.5h4.25v4.5zm5.25 0v-4.5h4.25v4.5zm5.25 0v-4.5h4.25v4.5zm5.25 0v-4.5H22v4.5zm0 5.5v-4.5H22v4.5zm-5.25 0v-4.5h4.25v4.5zm-5.25 0v-4.5h4.25v4.5zm-5.25 0v-4.5h4.25v4.5zm15.75 5.5v-4.5H22v4.5zm-5.25 0v-4.5h4.25v4.5zm-5.25 0v-4.5h4.25v4.5zm-5.25 0v-4.5h4.25v4.5z");
}
</style><path class="cbvah06vk"/>`,
		"fallback": "material-symbols:view-compact-sharp",
	});
}

export default Component;
