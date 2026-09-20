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
		"content": `<style>.po7f_rbfj {
  fill: currentColor;
  d: path("M6.75 3A3.75 3.75 0 0 0 3 6.75v14.5A3.75 3.75 0 0 0 6.75 25H17v-6.5h-6v5H6.75a2.25 2.25 0 0 1-2.25-2.25V6.75A2.25 2.25 0 0 1 6.75 4.5h14.5a2.25 2.25 0 0 1 2.25 2.25V11h-5v6H25V6.75A3.75 3.75 0 0 0 21.25 3zm14.5 22H18.5v-6.5H25v2.75A3.75 3.75 0 0 1 21.25 25M17 17v-6h-6v6z");
}
</style><path class="po7f_rbfj"/>`,
		"fallback": "fluent:table-freeze-column-and-row-28-filled",
	});
}

export default Component;
