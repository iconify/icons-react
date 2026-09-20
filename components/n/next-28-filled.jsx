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
		"content": `<style>.rwp6z6bbf {
  fill: currentColor;
  d: path("M23.5 3.75a.75.75 0 0 1 1.5 0v20.5a.75.75 0 0 1-1.5 0zM3 5.254C3 3.438 5.041 2.37 6.533 3.406l12.504 8.68a2.25 2.25 0 0 1 .013 3.688l-12.504 8.81C5.056 25.634 3 24.57 3 22.745z");
}
</style><path class="rwp6z6bbf"/>`,
		"fallback": "fluent:next-28-filled",
	});
}

export default Component;
