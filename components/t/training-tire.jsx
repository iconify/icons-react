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
		"content": `<style>.arhks-bhc {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M2.25 9.499q-.001-2.327 3.049-3.853Q8.094 4.248 12 4.248t6.701 1.398q3.051 1.526 3.049 3.853V14q0 2.339-3.04 3.858Q15.927 19.25 12 19.25t-6.71-1.392Q2.25 16.339 2.25 14zm4.5.001q0-2.75 5.25-2.75t5.25 2.75T12 12.25T6.75 9.5m-3 2.871V14q0 1.411 2.21 2.517Q8.427 17.75 12 17.75t6.04-1.233q2.21-1.106 2.21-2.517v-1.629q-.639.527-1.549.983q-2.795 1.398-6.701 1.398t-6.701-1.398q-.91-.456-1.549-.983");
}
</style><path class="arhks-bhc"/>`,
		"fallback": "uix-solid:training-tire",
	});
}

export default Component;
