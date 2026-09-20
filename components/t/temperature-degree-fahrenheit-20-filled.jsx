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
		"content": `<style>.myb007wry {
  fill: currentColor;
  d: path("M3.5 7a1.5 1.5 0 1 1 3 0a1.5 1.5 0 0 1-3 0M5 4a3 3 0 1 0 0 6a3 3 0 0 0 0-6m5.75 0a.75.75 0 0 0-.75.75v10.5a.75.75 0 0 0 1.5 0V10.5h4.75a.75.75 0 0 0 0-1.5H11.5V5.5h5.25a.75.75 0 0 0 0-1.5z");
}
</style><path class="myb007wry"/>`,
		"fallback": "fluent:temperature-degree-fahrenheit-20-filled",
	});
}

export default Component;
