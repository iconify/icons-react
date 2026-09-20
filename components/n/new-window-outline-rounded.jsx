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
		"content": `<style>.gaovc8bhb {
  fill: currentColor;
  d: path("M5.616 20q-.691 0-1.153-.462T4 18.384V5.616q0-.691.463-1.153T5.616 4h4.5q.213 0 .356.143q.144.144.144.357t-.144.357Q10.329 5 10.116 5h-4.5q-.231 0-.424.192T5 5.616v12.769q0 .23.192.423t.423.192h12.77q.23 0 .423-.192t.192-.423v-4.5q0-.214.143-.357t.357-.143t.357.143t.143.357v4.5q0 .69-.462 1.153T18.384 20zM16 8h-2.5q-.213 0-.357-.143T13 7.5t.143-.357T13.5 7H16V4.5q0-.213.143-.357T16.5 4t.357.143T17 4.5V7h2.5q.214 0 .357.143T20 7.5t-.143.357T19.5 8H17v2.5q0 .214-.143.357T16.5 11t-.357-.143T16 10.5z");
}
</style><path class="gaovc8bhb"/>`,
		"fallback": "material-symbols-light:new-window-outline-rounded",
	});
}

export default Component;
