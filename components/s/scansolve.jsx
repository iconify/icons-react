import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.q_b20ebsq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M4.5 14.5v-2c0-2.216 1.784-4 4-4h2m0 31h-2c-2.216 0-4-1.784-4-4v-2m39 0v2c0 2.216-1.784 4-4 4h-2m0-31h2c2.216 0 4 1.784 4 4v2m-19.5 6c3.83 0 6.936 3.134 6.936 7s-3.106 7-6.936 7zm0-7c3.83 0 6.936 3.134 6.936 7H24zm0 14c-3.83 0-6.935-3.134-6.935-7s3.105-7 6.935-7zm0 7c-3.83 0-6.935-3.134-6.935-7H24z");
}
</style><path class="q_b20ebsq"/>`,
		"fallback": "arcticons:scansolve",
	});
}

export default Component;
