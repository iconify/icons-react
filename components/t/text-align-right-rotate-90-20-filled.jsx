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
		"content": `<style>.u5a7uknyw {
  fill: currentColor;
  d: path("M15.75 6a.75.75 0 0 1 .75.75v10.5a.75.75 0 0 1-1.5 0V6.75a.75.75 0 0 1 .75-.75m-5-4a.75.75 0 0 1 .75.75v14.5a.75.75 0 0 1-1.5 0V2.75a.75.75 0 0 1 .75-.75M6.5 9.75a.75.75 0 0 0-1.5 0v7.5a.75.75 0 0 0 1.5 0z");
}
</style><path class="u5a7uknyw"/>`,
		"fallback": "fluent:text-align-right-rotate-90-20-filled",
	});
}

export default Component;
