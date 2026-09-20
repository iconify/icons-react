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
		"content": `<style>.b-nxag06r {
  fill: currentColor;
  d: path("M5.73 15.885h12.54v-1H5.73zm0-3.385h12.54v-1H5.73zm0-3.384h8.77v-1H5.73zM4.616 19q-.69 0-1.153-.462T3 17.384V6.616q0-.691.463-1.153T4.615 5h14.77q.69 0 1.152.463T21 6.616v10.769q0 .69-.463 1.153T19.385 19zm0-1h14.77q.23 0 .423-.192t.192-.424V6.616q0-.231-.192-.424T19.385 6H4.615q-.23 0-.423.192T4 6.616v10.769q0 .23.192.423t.423.192M4 18V6z");
}
</style><path class="b-nxag06r"/>`,
		"fallback": "material-symbols-light:text-ad-outline",
	});
}

export default Component;
