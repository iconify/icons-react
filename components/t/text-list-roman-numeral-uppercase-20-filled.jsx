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
		"content": `<style>.bi49ouboa {
  fill: currentColor;
  d: path("M5 1.5a.5.5 0 0 0-1 0v4a.5.5 0 0 0 1 0zM8.75 4a.75.75 0 0 0 0 1.5h7.5a.75.75 0 0 0 0-1.5zm0 5a.75.75 0 0 0 0 1.5h7.5a.75.75 0 0 0 0-1.5zm0 5a.75.75 0 0 0 0 1.5h7.5a.75.75 0 0 0 0-1.5zM4.5 7a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0v-4a.5.5 0 0 1 .5-.5m.5 6.5a.5.5 0 0 0-1 0v4a.5.5 0 0 0 1 0z");
}
</style><path class="bi49ouboa"/>`,
		"fallback": "fluent:text-list-roman-numeral-uppercase-20-filled",
	});
}

export default Component;
