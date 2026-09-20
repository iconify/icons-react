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
		"content": `<style>.rmr85fw4z {
  fill: currentColor;
  d: path("M5 3.5a.5.5 0 0 1 .5-.5h12a.5.5 0 0 1 0 1h-12a.5.5 0 0 1-.5-.5m0 12a.5.5 0 0 1 .5-.5h12a.5.5 0 0 1 0 1h-12a.5.5 0 0 1-.5-.5m6-8a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5m0 4a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5m-2-2a3.5 3.5 0 1 1-7 0a3.5 3.5 0 0 1 7 0M3.5 9a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1z");
}
</style><path class="rmr85fw4z"/>`,
		"fallback": "fluent:text-collapse-20-regular",
	});
}

export default Component;
