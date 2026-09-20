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
		"content": `<style>.iyecw4bpx {
  fill: currentColor;
  d: path("M3 10V3h7v7zm1-1h5V4H4zM3 21v-7h7v7zm1-1h5v-5H4zm10-10V3h7v7zm1-1h5V4h-5zm-1 12v-7h7v7zm1-1h5v-5h-5zm0-5");
}
</style><path class="iyecw4bpx"/>`,
		"fallback": "material-symbols-light:view-comfy-alt-outline",
	});
}

export default Component;
