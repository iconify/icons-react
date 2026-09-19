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
		"content": `<style>.q9ot84brw {
  fill: currentColor;
  d: path("M23.64 7c-.45-.34-4.93-4-11.64-4c-1.5 0-2.89.19-4.15.48L18.18 13.8zm-6.6 8.22L3.27 1.44L2 2.72l2.05 2.06C1.91 5.76.59 6.82.36 7l11.63 14.49l.01.01l.01-.01l3.9-4.86l3.32 3.32l1.27-1.27z");
}
</style><path class="q9ot84brw"/>`,
		"fallback": "ic:signal-wifi-off",
	});
}

export default Component;
