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
		"content": `<style>.lu8tfbe7s {
  fill: currentColor;
  d: path("M9 4.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 0 1h-8a.5.5 0 0 1-.5-.5m0 5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 0 1h-8a.5.5 0 0 1-.5-.5M2.5 14a.5.5 0 0 0 0 1h15a.5.5 0 0 0 0-1z");
}
</style><path class="lu8tfbe7s"/>`,
		"fallback": "fluent:text-align-justify-low-20-regular",
	});
}

export default Component;
