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
		"content": `<style>.w0j_oaczp {
  fill: currentColor;
  d: path("M14 3.5a10.48 10.48 0 0 0-8.247 4H8.25a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75v-4a.75.75 0 0 1 1.5 0v1.813A11.97 11.97 0 0 1 14 2c6.627 0 12 5.373 12 12s-5.373 12-12 12S2 20.627 2 14q0-.7.078-1.38a.71.71 0 0 1 .715-.62c.465 0 .814.425.765.887Q3.5 13.436 3.5 14c0 5.799 4.701 10.5 10.5 10.5S24.5 19.799 24.5 14S19.799 3.5 14 3.5m-3 7.003a1.5 1.5 0 0 1 2.255-1.296l6.001 3.495a1.5 1.5 0 0 1 0 2.593l-6.001 3.495A1.5 1.5 0 0 1 11 17.494z");
}
</style><path class="w0j_oaczp"/>`,
		"fallback": "fluent:replay-28-filled",
	});
}

export default Component;
