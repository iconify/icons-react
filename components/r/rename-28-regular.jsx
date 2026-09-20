import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":28,"height":28};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.e77o9d9if {
  fill: currentColor;
  d: path("M11.75 2a.75.75 0 0 0 0 1.5h1.5v21h-1.5a.75.75 0 0 0 0 1.5h4.5a.75.75 0 0 0 0-1.5h-1.5v-21h1.5a.75.75 0 0 0 0-1.5zm-5.5 4.02h6v1.5h-6A1.75 1.75 0 0 0 4.5 9.27v9.5c0 .966.784 1.75 1.75 1.75h6v1.5h-6A3.25 3.25 0 0 1 3 18.77v-9.5a3.25 3.25 0 0 1 3.25-3.25m15.5 14.5h-6v1.5h6A3.25 3.25 0 0 0 25 18.77v-9.5a3.25 3.25 0 0 0-3.25-3.25h-6v1.5h6c.966 0 1.75.783 1.75 1.75v9.5a1.75 1.75 0 0 1-1.75 1.75");
}
</style><path class="e77o9d9if"/>`,
		"fallback": "fluent:rename-28-regular",
	});
}

export default Component;
