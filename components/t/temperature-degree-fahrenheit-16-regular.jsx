import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.d07p4mg_s {
  fill: currentColor;
  d: path("M3.5 5a1 1 0 1 1 2 0a1 1 0 0 1-2 0m1-2a2 2 0 1 0 0 4a2 2 0 0 0 0-4m4 0a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 1 0V8h4a.5.5 0 0 0 0-1H9V4h4.5a.5.5 0 0 0 0-1z");
}
</style><path class="d07p4mg_s"/>`,
		"fallback": "fluent:temperature-degree-fahrenheit-16-regular",
	});
}

export default Component;
