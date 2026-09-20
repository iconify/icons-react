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
		"content": `<style>.t-nz0oxjr {
  fill: currentColor;
  d: path("M4 9a5 5 0 0 1 5-5h14a5 5 0 0 1 5 5v14a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5zm5-3a3 3 0 0 0-3 3v2h5V6zm4 0v5h6V6zm0 7v6h6v-6zm-2 6v-6H6v6zm-5 2v2a3 3 0 0 0 3 3h2v-5zm7 0v5h6v-5zm8 0v5h2a3 3 0 0 0 3-3v-2zm5-2v-6h-5v6zM21 6v5h5V9a3 3 0 0 0-3-3z");
}
</style><path class="t-nz0oxjr"/>`,
		"fallback": "fluent:table-32-regular",
	});
}

export default Component;
