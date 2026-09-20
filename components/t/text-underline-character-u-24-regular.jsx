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
		"content": `<style>.b76o_ic9k {
  fill: currentColor;
  d: path("M8.5 4.75a.75.75 0 0 0-1.5 0V12a5 5 0 0 0 10 0V4.75a.75.75 0 0 0-1.5 0V12a3.5 3.5 0 1 1-7 0zM6.75 18.5a.75.75 0 0 0 0 1.5h10.5a.75.75 0 0 0 0-1.5z");
}
</style><path class="b76o_ic9k"/>`,
		"fallback": "fluent:text-underline-character-u-24-regular",
	});
}

export default Component;
