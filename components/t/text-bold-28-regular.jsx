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
		"content": `<style>.t7j28dber {
  fill: currentColor;
  d: path("M15.5 4a5.5 5.5 0 0 1 4.081 9.186A6 6 0 0 1 16 24H8.5A1.5 1.5 0 0 1 7 22.499v-17A1.5 1.5 0 0 1 8.5 4zM10 21h6a3 3 0 1 0 0-6h-6zm0-9h5.5a2.5 2.5 0 0 0 0-5H10z");
}
</style><path class="t7j28dber"/>`,
		"fallback": "fluent:text-bold-28-regular",
	});
}

export default Component;
