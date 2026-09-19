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
		"content": `<style>.w45fvcc_b {
  fill: currentColor;
  d: path("M21 5v6.59l-2.29-2.3c-.39-.39-1.03-.39-1.42 0L14 12.59L10.71 9.3a.996.996 0 0 0-1.41 0L6 12.59L3 9.58V5c0-1.1.9-2 2-2h14c1.1 0 2 .9 2 2m-3 6.42l3 3.01V19c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2v-6.58l2.29 2.29c.39.39 1.02.39 1.41 0l3.3-3.3l3.29 3.29c.39.39 1.02.39 1.41 0z");
}
</style><path class="w45fvcc_b"/>`,
		"fallback": "ic:round-broken-image",
	});
}

export default Component;
