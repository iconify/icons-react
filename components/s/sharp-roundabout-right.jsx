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
		"content": `<style>.g-eiukfpa {
  fill: currentColor;
  d: path("M8 13c-2.21 0-4-1.79-4-4s1.79-4 4-4s4 1.79 4 4v1h6.17l-1.59 1.59L18 13l4-4l-4-4l-1.41 1.41L18.17 8h-4.25C13.44 5.16 10.97 3 8 3C4.69 3 2 5.69 2 9c0 2.97 2.16 5.44 5 5.92V21h2v-8z");
}
</style><path class="g-eiukfpa"/>`,
		"fallback": "ic:sharp-roundabout-right",
	});
}

export default Component;
