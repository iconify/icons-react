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
		"content": `<style>.ja-gegkls {
  fill: currentColor;
  d: path("M3 9.5v11.75A3.75 3.75 0 0 0 6.75 25h14.5A3.75 3.75 0 0 0 25 21.25V6.75A3.75 3.75 0 0 0 21.25 3H9.5v6.5zm1.5 11.75V18.5h5v5H6.75a2.25 2.25 0 0 1-2.25-2.25M9.5 11v6h-5v-6zM11 23.5v-5h6v5zM17 11v6h-6v-6zm1.5 12.5v-5h5v2.75a2.25 2.25 0 0 1-2.25 2.25zm5-12.5v6h-5v-6zm-2.25-6.5a2.25 2.25 0 0 1 2.25 2.25V9.5h-5v-5zM11 4.5h6v5h-6z");
}
</style><path class="ja-gegkls"/>`,
		"fallback": "fluent:puzzle-cube-28-regular",
	});
}

export default Component;
