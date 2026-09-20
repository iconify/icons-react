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
		"content": `<style>.de6di5bqp {
  fill: currentColor;
  d: path("m10.575 19.575l-9.05-9.05q-.3-.3-.45-.675t-.15-.75q0-.425.175-.812t.525-.688Q3.675 5.825 6.5 4.913T12 4t5.5.913T22.375 7.6q.35.3.525.688t.175.812q0 .375-.15.75t-.45.675l-9.05 9.05q-.3.3-.675.45t-.75.15t-.75-.15t-.675-.45M5.8 11.95q1.325-.95 2.9-1.487t3.3-.538t3.3.538t2.9 1.487l2.9-2.9q-1.95-1.475-4.262-2.262T12 6t-4.837.788T2.9 9.05z");
}
</style><path class="de6di5bqp"/>`,
		"fallback": "material-symbols:network-wifi-3-bar-outline-rounded",
	});
}

export default Component;
