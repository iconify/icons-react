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
		"content": `<style>.fy7m4so-r {
  fill: currentColor;
  d: path("M5 1.5a.5.5 0 1 1-1 0a.5.5 0 0 1 1 0m-.5 1A.5.5 0 0 1 5 3v2.5a.5.5 0 0 1-1 0V3a.5.5 0 0 1 .5-.5m0 6A.5.5 0 0 1 5 9v2.5a.5.5 0 0 1-1 0V9a.5.5 0 0 1 .5-.5M5 15a.5.5 0 0 0-1 0v2.5a.5.5 0 0 0 1 0zm-.5-7a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1m.5 5.5a.5.5 0 1 1-1 0a.5.5 0 0 1 1 0M8.75 4a.75.75 0 0 0 0 1.5h7.5a.75.75 0 0 0 0-1.5zm0 5a.75.75 0 0 0 0 1.5h7.5a.75.75 0 0 0 0-1.5zm0 5a.75.75 0 0 0 0 1.5h7.5a.75.75 0 0 0 0-1.5z");
}
</style><path class="fy7m4so-r"/>`,
		"fallback": "fluent:text-list-roman-numeral-lowercase-20-filled",
	});
}

export default Component;
