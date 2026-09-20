import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.rv-n-rztn {
  fill: currentColor;
  d: path("M2 4.5A2.5 2.5 0 0 1 4.5 2h7A2.5 2.5 0 0 1 14 4.5v7a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 2 11.5zm3.5.5A.75.75 0 1 0 4 5a.75.75 0 0 0 1.5 0m0 3A.75.75 0 1 0 4 8a.75.75 0 0 0 1.5 0m-.75 3.75a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5M6.5 5a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 0-1H7a.5.5 0 0 0-.5.5M7 7.5a.5.5 0 0 0 0 1h4.5a.5.5 0 0 0 0-1zM6.5 11a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 0-1H7a.5.5 0 0 0-.5.5");
}
</style><path class="rv-n-rztn"/>`,
		"fallback": "fluent:text-bullet-list-square-16-filled",
	});
}

export default Component;
