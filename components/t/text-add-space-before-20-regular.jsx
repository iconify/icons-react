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
		"content": `<style>.ec981ubrc {
  fill: currentColor;
  d: path("M8.146 5.854a.5.5 0 1 1 .708-.708L10 6.293l1.146-1.147a.5.5 0 0 1 .708.708l-1.5 1.5a.5.5 0 0 1-.708 0zM3 10.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5m0 4a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5");
}
</style><path class="ec981ubrc"/>`,
		"fallback": "fluent:text-add-space-before-20-regular",
	});
}

export default Component;
