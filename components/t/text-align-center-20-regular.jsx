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
		"content": `<style>.p3uty2vzs {
  fill: currentColor;
  d: path("M4 4.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m-2 5a.5.5 0 0 1 .5-.5h15a.5.5 0 0 1 0 1h-15a.5.5 0 0 1-.5-.5M6.5 14a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1z");
}
</style><path class="p3uty2vzs"/>`,
		"fallback": "fluent:text-align-center-20-regular",
	});
}

export default Component;
