import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.ryosshh4o {
  fill: currentColor;
  d: path("M3.5 2.75a.75.75 0 0 0 0 1.5h13a.75.75 0 0 0 0-1.5zm0 12a.75.75 0 0 0 0 1.5h13a.75.75 0 0 0 0-1.5zm7.25-2.25a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 0 1.5h-5a.75.75 0 0 1-.75-.75m-6.5-4a2.25 2.25 0 0 1 4.5 0v5a.75.75 0 0 0 1.5 0v-5a3.75 3.75 0 1 0-7.5 0v5a.75.75 0 0 0 1.5 0z");
}
</style><path class="ryosshh4o"/>`,
		"fallback": "fluent:text-position-line-20-filled",
	});
}

export default Component;
