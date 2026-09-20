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
		"content": `<style>.rn2q7qijp {
  fill: currentColor;
  d: path("M3 6.75A3.75 3.75 0 0 1 6.75 3h14.5A3.75 3.75 0 0 1 25 6.75v7.75A7.5 7.5 0 0 0 14.5 25H6.75A3.75 3.75 0 0 1 3 21.25zM20.5 27a6.5 6.5 0 1 1 0-13a6.5 6.5 0 0 1 0 13m1.646-9.854a.5.5 0 0 0 0 .708L23.293 19H20.75A3.75 3.75 0 0 0 17 22.75V23a.5.5 0 0 0 1 0v-.25A2.75 2.75 0 0 1 20.75 20h2.543l-1.147 1.146a.5.5 0 0 0 .708.708l2-2a.5.5 0 0 0 0-.708l-2-2a.5.5 0 0 0-.708 0");
}
</style><path class="rn2q7qijp"/>`,
		"fallback": "fluent:square-arrow-forward-28-filled",
	});
}

export default Component;
