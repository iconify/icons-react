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
		"content": `<style>.i7-rucccy {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M9 4.75q0 2.598 2.25 2.946v.596q-3 .354-3 3.708t3 3.708v.596Q9 16.652 9 19.25q0 3 3 3t3-3q0-2.598-2.25-2.946v-.596q3-.354 3-3.708t-3-3.708v-.596Q15 7.348 15 4.75q0-3-3-3t-3 3");
}
</style><path class="i7-rucccy"/>`,
		"fallback": "uix-solid:sequence",
	});
}

export default Component;
