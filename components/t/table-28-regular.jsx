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
		"content": `<style>.a_-azhber {
  fill: currentColor;
  d: path("M3 6.75A3.75 3.75 0 0 1 6.75 3h14.5A3.75 3.75 0 0 1 25 6.75v14.5A3.75 3.75 0 0 1 21.25 25H6.75A3.75 3.75 0 0 1 3 21.25zM4.5 18.5v2.75a2.25 2.25 0 0 0 2.25 2.25H9.5v-5zm5-1.5v-6h-5v6zm1.5 1.5v5h6v-5zm6-1.5v-6h-6v6zm1.5 1.5v5h2.75a2.25 2.25 0 0 0 2.25-2.25V18.5zm5-1.5v-6h-5v6zm0-10.25a2.25 2.25 0 0 0-2.25-2.25H18.5v5h5zM17 4.5h-6v5h6zm-7.5 0H6.75A2.25 2.25 0 0 0 4.5 6.75V9.5h5z");
}
</style><path class="a_-azhber"/>`,
		"fallback": "fluent:table-28-regular",
	});
}

export default Component;
