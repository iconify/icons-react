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
		"content": `<style>.xg41-gd_j {
  fill: currentColor;
  d: path("M2.73 20L12 4l9.27 16zm9.704-2.566q.182-.182.182-.434t-.182-.434t-.434-.181t-.434.181t-.181.434t.181.434t.434.181t.434-.181m-.934-2.05h1v-5h-1z");
}
</style><path class="xg41-gd_j"/>`,
		"fallback": "material-symbols-light:warning",
	});
}

export default Component;
