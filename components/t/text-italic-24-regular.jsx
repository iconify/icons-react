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
		"content": `<style>.kktk8-76i {
  fill: currentColor;
  d: path("M18.75 4a.75.75 0 0 1 0 1.5h-3.482l-4.932 13h3.414a.75.75 0 0 1 0 1.5h-8.5a.75.75 0 0 1 0-1.5h3.482l4.932-13H10.25a.75.75 0 0 1 0-1.5z");
}
</style><path class="kktk8-76i"/>`,
		"fallback": "fluent:text-italic-24-regular",
	});
}

export default Component;
