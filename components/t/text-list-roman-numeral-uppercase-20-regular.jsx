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
		"content": `<style>.qo5tz79ai {
  fill: currentColor;
  d: path("M5 1.5a.5.5 0 0 0-1 0v4a.5.5 0 0 0 1 0zm0 6a.5.5 0 0 0-1 0v4a.5.5 0 0 0 1 0zM4.5 13a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0v-4a.5.5 0 0 1 .5-.5m4-9a.5.5 0 0 0 0 1h8a.5.5 0 0 0 0-1zm0 5a.5.5 0 0 0 0 1h8a.5.5 0 0 0 0-1zm0 5a.5.5 0 0 0 0 1h8a.5.5 0 0 0 0-1z");
}
</style><path class="qo5tz79ai"/>`,
		"fallback": "fluent:text-list-roman-numeral-uppercase-20-regular",
	});
}

export default Component;
