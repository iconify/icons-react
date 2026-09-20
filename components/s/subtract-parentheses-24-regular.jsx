import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.zhw2iobao {
  fill: currentColor;
  d: path("M6.719 5.34a.75.75 0 1 0-.933-1.175A9.98 9.98 0 0 0 2 12a9.98 9.98 0 0 0 3.786 7.835a.75.75 0 1 0 .933-1.174A8.48 8.48 0 0 1 3.5 12a8.48 8.48 0 0 1 3.219-6.66m11.495-1.175a.75.75 0 1 0-.933 1.174A8.48 8.48 0 0 1 20.5 12a8.48 8.48 0 0 1-3.219 6.66a.75.75 0 0 0 .933 1.175A9.98 9.98 0 0 0 22 12a9.98 9.98 0 0 0-3.786-7.835M7.75 11.25a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5z");
}
</style><path class="zhw2iobao"/>`,
		"fallback": "fluent:subtract-parentheses-24-regular",
	});
}

export default Component;
