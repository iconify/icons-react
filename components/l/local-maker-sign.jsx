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
		"content": `<style>.qm_eylxsb {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("m4.421 13.477l7 8.5q.046.056.102.102q.115.095.258.138t.291.03q.149-.015.28-.085t.227-.185l7.007-8.508q1.758-2.198 1.537-4.966q-.239-2.982-2.707-4.627l-.03-.019q-2.083-1.25-4.16-.639q-1.36.4-2.226 1.42q-.866-1.02-2.226-1.42q-2.077-.611-4.16.639l-.03.019Q3.116 5.521 2.877 8.503q-.221 2.768 1.544 4.974M9.25 10.5q0-2.75 2.75-2.75t2.75 2.75T12 13.25T9.25 10.5");
}
</style><path class="qm_eylxsb"/>`,
		"fallback": "uix-solid:local-maker-sign",
	});
}

export default Component;
