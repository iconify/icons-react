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
		"content": `<style>.wxrty3bfy {
  fill: currentColor;
  d: path("M13.5 13.5v-3h-3v-1h3v-3h1v3h3v1h-3v3zM4.616 21q-.691 0-1.153-.462T3 19.385V8.615q0-.69.463-1.152T4.615 7h2V4.616q0-.691.463-1.153T8.231 3h11.154q.69 0 1.153.463T21 4.615V15.77q0 .69-.462 1.153t-1.153.463H17v2q0 .69-.462 1.152T15.385 21zm3.615-4.615h11.154q.23 0 .423-.193T20 15.77V4.615q0-.23-.192-.423T19.385 4H8.23q-.23 0-.422.192t-.192.423V15.77q0 .231.192.423t.423.193");
}
</style><path class="wxrty3bfy"/>`,
		"fallback": "material-symbols-light:shadow-add-outline",
	});
}

export default Component;
