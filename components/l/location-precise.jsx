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
		"content": `<style>.jpdsd35ap {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M11.439 21.998Q4.25 13.91 4.25 9.5q0-3.21 2.27-5.48T12 1.75t5.48 2.27t2.27 5.48q0 4.41-7.189 12.498q-.1.112-.234.177t-.283.074t-.29-.04t-.252-.148q-.033-.03-.063-.063M8.818 6.318Q7.5 7.636 7.5 9.5t1.318 3.182T12 14t3.182-1.318T16.5 9.5t-1.318-3.182T12 5T8.818 6.318");
}
</style><path class="jpdsd35ap"/>`,
		"fallback": "uix-solid:location-precise",
	});
}

export default Component;
