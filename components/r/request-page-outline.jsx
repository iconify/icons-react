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
		"content": `<style>.d5j6cyb5z {
  fill: currentColor;
  d: path("M11.5 17.5h1v-1H14q.214 0 .357-.143T14.5 16v-3q0-.213-.143-.357T14 12.5h-3.5v-2h4v-1h-2v-1h-1v1H10q-.213 0-.357.143T9.5 10v3q0 .214.143.357T10 13.5h3.5v2h-4v1h2zM6.616 21q-.691 0-1.153-.462T5 19.385V4.615q0-.69.463-1.152T6.616 3h6.961L19 8.423v10.962q0 .69-.462 1.153T17.384 21zm0-1h10.769q.23 0 .423-.192t.192-.424V8.85L13.15 4H6.616q-.231 0-.424.192T6 4.615v14.77q0 .23.192.423t.423.192M6 20V4z");
}
</style><path class="d5j6cyb5z"/>`,
		"fallback": "material-symbols-light:request-page-outline",
	});
}

export default Component;
