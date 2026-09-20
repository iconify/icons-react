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
		"content": `<style>.qq7e6zp9m {
  fill: currentColor;
  d: path("M3 6.75A3.75 3.75 0 0 1 6.75 3h14.5A3.75 3.75 0 0 1 25 6.75v14.5A3.75 3.75 0 0 1 21.25 25h-6.775l-1.5-1.5H17v-5h-4.076A6.5 6.5 0 0 0 9.5 13.732V11h-5v2.313a6.5 6.5 0 0 0-1.5.709zM18.5 18.5v5h2.75a2.25 2.25 0 0 0 2.25-2.25V18.5zm5-1.5v-6h-5v6zm0-10.25a2.25 2.25 0 0 0-2.25-2.25H18.5v5h5zM17 4.5h-6v5h6zm-7.5 0H6.75A2.25 2.25 0 0 0 4.5 6.75V9.5h5zM6.5 25c1.248 0 2.4-.416 3.323-1.117l2.897 2.897a.75.75 0 1 0 1.06-1.06l-2.897-2.897A5.5 5.5 0 1 0 6.5 25m0-1.5a4 4 0 1 1 0-8a4 4 0 0 1 0 8");
}
</style><path class="qq7e6zp9m"/>`,
		"fallback": "fluent:table-cell-center-search-28-regular",
	});
}

export default Component;
