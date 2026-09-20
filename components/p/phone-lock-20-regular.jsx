import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.r-9db9bgp {
  fill: currentColor;
  d: path("M5 4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v5.041a3 3 0 0 0-1 0V4a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h3v1H7a2 2 0 0 1-2-2zm3.5 10H10v1H8.5a.5.5 0 0 1 0-1m4-2v1H12a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-.5v-1a2 2 0 1 0-4 0m1 1v-1a1 1 0 1 1 2 0v1zm1 2.25a.75.75 0 1 1 0 1.5a.75.75 0 0 1 0-1.5");
}
</style><path class="r-9db9bgp"/>`,
		"fallback": "fluent:phone-lock-20-regular",
	});
}

export default Component;
