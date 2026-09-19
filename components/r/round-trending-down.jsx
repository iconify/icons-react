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
		"content": `<style>.mciim_lvi {
  fill: currentColor;
  d: path("m16.85 17.15l1.44-1.44l-4.88-4.88l-3.29 3.29a.996.996 0 0 1-1.41 0l-6-6.01A.996.996 0 1 1 4.12 6.7L9.41 12l3.29-3.29a.996.996 0 0 1 1.41 0l5.59 5.58l1.44-1.44a.5.5 0 0 1 .85.35v4.29c0 .28-.22.5-.5.5H17.2c-.44.01-.66-.53-.35-.84");
}
</style><path class="mciim_lvi"/>`,
		"fallback": "ic:round-trending-down",
	});
}

export default Component;
