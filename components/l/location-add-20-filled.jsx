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
		"content": `<style>.f-z0szc5s {
  fill: currentColor;
  d: path("M14.95 4.051a7.005 7.005 0 0 1 0 9.904l-1.128 1.114l-2.436 2.37a1.993 1.993 0 0 1-2.64.118l-.132-.118l-2.043-1.985l-1.52-1.499a7.005 7.005 0 0 1 0-9.904a7 7 0 0 1 9.899 0M10 5a.5.5 0 0 0-.5.5V8H7a.5.5 0 0 0 0 1h2.5v2.5a.5.5 0 0 0 1 0V9H13a.5.5 0 0 0 0-1h-2.5V5.5A.5.5 0 0 0 10 5");
}
</style><path class="f-z0szc5s"/>`,
		"fallback": "fluent:location-add-20-filled",
	});
}

export default Component;
