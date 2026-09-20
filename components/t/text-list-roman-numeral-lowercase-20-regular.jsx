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
		"content": `<style>.yttk1ibla {
  fill: currentColor;
  d: path("M4.5 2a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1m0 .5A.5.5 0 0 1 5 3v2.5a.5.5 0 0 1-1 0V3a.5.5 0 0 1 .5-.5m0 6A.5.5 0 0 1 5 9v2.5a.5.5 0 0 1-1 0V9a.5.5 0 0 1 .5-.5M5 15a.5.5 0 0 0-1 0v2.5a.5.5 0 0 0 1 0zM8 4.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 0 1h-8a.5.5 0 0 1-.5-.5m0 5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 0 1h-8a.5.5 0 0 1-.5-.5m0 5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 0 1h-8a.5.5 0 0 1-.5-.5m-3-7a.5.5 0 1 1-1 0a.5.5 0 0 1 1 0M4.5 14a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1");
}
</style><path class="yttk1ibla"/>`,
		"fallback": "fluent:text-list-roman-numeral-lowercase-20-regular",
	});
}

export default Component;
