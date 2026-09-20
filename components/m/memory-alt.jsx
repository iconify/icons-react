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
		"content": `<style>.a-3h7n9tw {
  fill: currentColor;
  d: path("M6.5 14.5h1v-5h-1zm5 0h1v-5h-1zm5 0h1v-5h-1zM5.5 20v-2h-.885q-.69 0-1.153-.462T3 16.384V7.616q0-.691.463-1.153T4.615 6H5.5V4h1v2h5V4h1v2h5V4h1v2h.885q.69 0 1.152.463T21 7.616v8.769q0 .69-.463 1.153T19.385 18H18.5v2h-1v-2h-5v2h-1v-2h-5v2z");
}
</style><path class="a-3h7n9tw"/>`,
		"fallback": "material-symbols-light:memory-alt",
	});
}

export default Component;
