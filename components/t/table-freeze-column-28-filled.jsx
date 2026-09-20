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
		"content": `<style>.x0jyy9ezj {
  fill: currentColor;
  d: path("M4.5 6.75A2.25 2.25 0 0 1 6.75 4.5H11v5h6V3H6.75A3.75 3.75 0 0 0 3 6.75v14.5A3.75 3.75 0 0 0 6.75 25H17v-6.5h-6v5H6.75a2.25 2.25 0 0 1-2.25-2.25zM21.25 25H18.5v-6.5H25v2.75A3.75 3.75 0 0 1 21.25 25M25 11v6h-6.5v-6zm0-4.25V9.5h-6.5V3h2.75A3.75 3.75 0 0 1 25 6.75M17 17v-6h-6v6z");
}
</style><path class="x0jyy9ezj"/>`,
		"fallback": "fluent:table-freeze-column-28-filled",
	});
}

export default Component;
