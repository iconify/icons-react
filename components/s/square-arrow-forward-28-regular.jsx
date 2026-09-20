import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":28,"height":28};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.bgbhtzb1g {
  fill: currentColor;
  d: path("M3 6.75A3.75 3.75 0 0 1 6.75 3h14.5A3.75 3.75 0 0 1 25 6.75v7.75a7.5 7.5 0 0 0-1.5-.876V6.75a2.25 2.25 0 0 0-2.25-2.25H6.75A2.25 2.25 0 0 0 4.5 6.75v14.5a2.25 2.25 0 0 0 2.25 2.25h6.874c.234.535.529 1.038.875 1.5H6.75A3.75 3.75 0 0 1 3 21.25zM14 20.5a6.5 6.5 0 1 0 13 0a6.5 6.5 0 0 0-13 0m8.146-2.646a.5.5 0 0 1 .708-.708l2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L23.293 20H20.75A2.75 2.75 0 0 0 18 22.75V23a.5.5 0 0 1-1 0v-.25A3.75 3.75 0 0 1 20.75 19h2.543z");
}
</style><path class="bgbhtzb1g"/>`,
		"fallback": "fluent:square-arrow-forward-28-regular",
	});
}

export default Component;
