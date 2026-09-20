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
		"content": `<style>.xtzvnwv_i {
  fill: currentColor;
  d: path("M2 7a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3zm8.17 19A3 3 0 0 0 13 28h6c6.074 0 11-4.925 11-11v-2a3 3 0 0 0-2-2.83V17a9 9 0 0 1-9 9zM9 24a3 3 0 0 1-2.83-2H19a5 5 0 0 0 5-5V8.17c1.164.412 2 1.524 2 2.83v6a7 7 0 0 1-7 7z");
}
</style><path class="xtzvnwv_i"/>`,
		"fallback": "fluent:stack-32-filled",
	});
}

export default Component;
