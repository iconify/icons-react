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
		"content": `<style>.fy-msybgw {
  fill: currentColor;
  d: path("M17.25 15.039h2v-1q0-.426-.288-.713t-.712-.288t-.712.288t-.288.712zM12 19.577L1.423 9q2.183-1.964 4.91-2.982Q9.063 5 12 5t5.666 1.018Q20.394 7.037 22.577 9l-1.986 1.987q-.558-.286-1.163-.415q-.606-.13-1.236-.13q-2.283 0-3.882 1.599q-1.598 1.598-1.598 3.882q0 .63.129 1.235q.13.606.415 1.163zm3.462 0v-4.539h1.019v-1q0-.748.51-1.258q.511-.51 1.259-.51t1.259.51t.51 1.259v1H21v4.538zM4.35 10.5q1.675-1.2 3.625-1.85T12 8t4.025.65t3.625 1.85l1.45-1.45q-1.975-1.5-4.3-2.275T12 6t-4.8.775T2.9 9.05z");
}
</style><path class="fy-msybgw"/>`,
		"fallback": "material-symbols-light:network-wifi-locked-sharp",
	});
}

export default Component;
