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
		"content": `<style>.e1io0r3mu {
  fill: currentColor;
  d: path("M6.75 3A3.75 3.75 0 0 0 3 6.75v14.5A3.75 3.75 0 0 0 6.75 25h14.5A3.75 3.75 0 0 0 25 21.25V6.75A3.75 3.75 0 0 0 21.25 3zM4.5 21.25V18.5h5v5H6.75a2.25 2.25 0 0 1-2.25-2.25M9.5 11v6h-5v-6zm7.5 0v6h-6v-6zm1.5 12.5v-5h5v2.75a2.25 2.25 0 0 1-2.25 2.25zm5-12.5v6h-5v-6zm-2.25-6.5a2.25 2.25 0 0 1 2.25 2.25V9.5h-5v-5zm-14.5 0H9.5v5h-5V6.75A2.25 2.25 0 0 1 6.75 4.5");
}
</style><path class="e1io0r3mu"/>`,
		"fallback": "fluent:table-column-top-bottom-28-regular",
	});
}

export default Component;
