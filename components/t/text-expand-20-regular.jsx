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
		"content": `<style>.od-x2zbcw {
  fill: currentColor;
  d: path("M17.5 15a.5.5 0 0 1 0 1h-14a.5.5 0 0 1 0-1zm-13-9a3.5 3.5 0 1 1 0 7a3.5 3.5 0 0 1 0-7m0 1.25a.5.5 0 0 0-.5.5V9H2.75a.5.5 0 0 0 0 1H4v1.25a.5.5 0 0 0 1 0V10h1.25a.5.5 0 0 0 0-1H5V7.75a.5.5 0 0 0-.5-.5m13 3.75a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1zm0-4a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1zm0-4a.5.5 0 0 1 0 1h-14a.5.5 0 0 1 0-1z");
}
</style><path class="od-x2zbcw"/>`,
		"fallback": "fluent:text-expand-20-regular",
	});
}

export default Component;
