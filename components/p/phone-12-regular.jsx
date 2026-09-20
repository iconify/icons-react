import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.oyt4jrb0h {
  fill: currentColor;
  d: path("M5.5 8a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1zm-1-7A1.5 1.5 0 0 0 3 2.5v7A1.5 1.5 0 0 0 4.5 11h3A1.5 1.5 0 0 0 9 9.5v-7A1.5 1.5 0 0 0 7.5 1zM4 2.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5z");
}
</style><path class="oyt4jrb0h"/>`,
		"fallback": "fluent:phone-12-regular",
	});
}

export default Component;
