import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.tivyoab5f {
  fill: currentColor;
  d: path("M4 20v-1.23h1.23V20zM4 5.23V4h1.23v1.23zM7.692 20v-1.23h1.231V20zm0-14.77V4h1.231v1.23zM11.385 20v-1.23h1.23V20zm3.692 0v-1.23h1.23V20zm0-14.77V4h1.23v1.23zM19 20V4h1v16zm-8.442-4.712L9.85 14.6l2.075-2.1H4v-1h7.925L9.85 9.4l.708-.688L13.846 12zm.827-10.057V4h1.23v1.23z");
}
</style><path class="tivyoab5f"/>`,
		"fallback": "material-symbols-light:text-select-jump-to-end",
	});
}

export default Component;
