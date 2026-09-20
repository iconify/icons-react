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
		"content": `<style>.on5huabvk {
  fill: currentColor;
  d: path("M4.75 4A2.75 2.75 0 0 0 2 6.75v6.5A2.75 2.75 0 0 0 4.75 16h10.5A2.75 2.75 0 0 0 18 13.25v-6.5A2.75 2.75 0 0 0 15.25 4zM12 5v10H9V5zm1 10V5h2.25c.966 0 1.75.784 1.75 1.75v6.5A1.75 1.75 0 0 1 15.25 15zm-5 0H6V5h2zM5 5v10h-.25A1.75 1.75 0 0 1 3 13.25v-6.5C3 5.784 3.784 5 4.75 5z");
}
</style><path class="on5huabvk"/>`,
		"fallback": "fluent:slide-transition-20-regular",
	});
}

export default Component;
