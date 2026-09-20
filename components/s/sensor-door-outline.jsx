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
		"content": `<style>.nkdyjm5mn {
  fill: currentColor;
  d: path("M5 21V4.616q0-.691.463-1.153T6.616 3h10.769q.69 0 1.153.463T19 4.616V21zm1-1h12V4.616q0-.231-.192-.424T17.384 4H6.616q-.231 0-.424.192T6 4.615zm9.5-7q.414 0 .707-.293T16.5 12t-.293-.707T15.5 11t-.707.293T14.5 12t.293.707t.707.293M6 20V4z");
}
</style><path class="nkdyjm5mn"/>`,
		"fallback": "material-symbols-light:sensor-door-outline",
	});
}

export default Component;
