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
		"content": `<style>.dtgaxbbtm {
  fill: currentColor;
  d: path("M3 21.25A3.75 3.75 0 0 0 6.75 25H17.5a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H6.75A3.75 3.75 0 0 0 3 6.75zM17 9.5h-6v-5h6zM11 11h6v6h-6zM9.5 9.5h-5V6.75A2.25 2.25 0 0 1 6.75 4.5H9.5zm-5 1.5h5v6h-5zm0 10.25V18.5h5v5H6.75a2.25 2.25 0 0 1-2.25-2.25M11 23.5v-5h6v5zM25 3.75a.75.75 0 0 0-1.5 0v20.5a.75.75 0 0 0 1.5 0z");
}
</style><path class="dtgaxbbtm"/>`,
		"fallback": "fluent:table-stack-right-28-regular",
	});
}

export default Component;
