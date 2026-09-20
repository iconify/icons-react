import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.x0oeyc-5s {
  fill: currentColor;
  d: path("M7.5 5A2.5 2.5 0 0 0 5 7.5v17A2.5 2.5 0 0 0 7.5 27H15V5zM17 5v22h7.5a2.5 2.5 0 0 0 2.5-2.5v-17A2.5 2.5 0 0 0 24.5 5zM3 7.5A4.5 4.5 0 0 1 7.5 3h17A4.5 4.5 0 0 1 29 7.5v17a4.5 4.5 0 0 1-4.5 4.5h-17A4.5 4.5 0 0 1 3 24.5z");
}
</style><path class="x0oeyc-5s"/>`,
		"fallback": "fluent:layout-column-two-32-regular",
	});
}

export default Component;
