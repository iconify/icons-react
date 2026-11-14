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
		"content": `<style>.ntgb9sp2c {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M9.75 6.5q0-2.25 2.25-2.25t2.25 2.25q0 .924-.38 1.469l4.358 5.602q.35-.071.772-.071q2.5 0 2.5 2.5T19 18.5q-2.092 0-2.433-1.75H9.208q-.354 3-3.708 3q-3.75 0-3.75-3.75t3.75-3.75q.885 0 1.561.209l3.096-4.452Q9.75 7.457 9.75 6.5m1.741 2.217l-3.138 4.511q.703.735.855 2.022h7.359q.103-.53.367-.899l-4.386-5.639q-.255.038-.548.038q-.271 0-.509-.033");
}
</style><path class="ntgb9sp2c"/>`,
		"fallback": "uix-solid:lagrange-point",
	});
}

export default Component;
