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
		"content": `<style>.of-cgabuw {
  fill: currentColor;
  d: path("M7.5 29A4.5 4.5 0 0 1 3 24.5v-17A4.5 4.5 0 0 1 7.5 3h17A4.5 4.5 0 0 1 29 7.5v17a4.5 4.5 0 0 1-4.5 4.5zM4 24.5A3.5 3.5 0 0 0 7.5 28h8V4h-8A3.5 3.5 0 0 0 4 7.5zM16.5 4v24h8a3.5 3.5 0 0 0 3.5-3.5v-17A3.5 3.5 0 0 0 24.5 4z");
}
</style><path class="of-cgabuw"/>`,
		"fallback": "fluent:layout-column-two-32-light",
	});
}

export default Component;
