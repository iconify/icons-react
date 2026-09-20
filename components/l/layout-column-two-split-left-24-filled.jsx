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
		"content": `<style>.g_t5_2bgn {
  fill: currentColor;
  d: path("M17.75 21h-5V3h5A3.25 3.25 0 0 1 21 6.25v11.5A3.25 3.25 0 0 1 17.75 21M6.25 3h5v8.25H3v-5A3.25 3.25 0 0 1 6.25 3M3 12.75v5A3.25 3.25 0 0 0 6.25 21h5v-8.25z");
}
</style><path class="g_t5_2bgn"/>`,
		"fallback": "fluent:layout-column-two-split-left-24-filled",
	});
}

export default Component;
