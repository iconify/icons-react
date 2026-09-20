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
		"content": `<style>.tkgtu19da {
  fill: currentColor;
  d: path("M3 6.75A3.75 3.75 0 0 1 6.75 3h14.5A3.75 3.75 0 0 1 25 6.75v14.5A3.75 3.75 0 0 1 21.25 25H6.75A3.75 3.75 0 0 1 3 21.25zM6.75 23.5H9.5v-14h14V6.75a2.25 2.25 0 0 0-2.25-2.25H6.75A2.25 2.25 0 0 0 4.5 6.75v14.5a2.25 2.25 0 0 0 2.25 2.25M17 17v-6h-6v6zm6.5-6h-5v6h5zM11 18.5v5h6v-5zm7.5 5h2.75a2.25 2.25 0 0 0 2.25-2.25V18.5h-5z");
}
</style><path class="tkgtu19da"/>`,
		"fallback": "fluent:table-freeze-column-and-row-28-regular",
	});
}

export default Component;
