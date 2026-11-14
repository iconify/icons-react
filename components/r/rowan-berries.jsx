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
		"content": `<style>.k1z3vq28q {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M10.335 8.58Q12.08 2.25 21 2.25q.074 0 .146.014q.073.015.141.043t.13.069q.061.041.113.094q.053.052.094.113t.069.13t.043.141t.014.146q0 .042-.005.083q-.403 3.632-3.695 5.449q-1.956 1.079-4.443 1.262l6.122 3.961q2.521.112 2.521 2.745q0 2.75-2.75 2.75t-2.75-2.75q0-1.609.942-2.277l-5.942-3.844v5.931q2 .345 2 2.69q0 2.75-2.75 2.75T8.25 19q0-2.345 2-2.69v-5.693l-4.125 3.49q1.125.634 1.125 2.393q0 2.75-2.75 2.75T1.75 16.5q0-2.604 2.466-2.742z");
}
</style><path class="k1z3vq28q"/>`,
		"fallback": "uix-solid:rowan-berries",
	});
}

export default Component;
