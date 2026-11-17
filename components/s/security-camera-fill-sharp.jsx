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
		"content": `<style>.uxpswp3rm {
  fill: currentColor;
  d: path("M2.979 6.241L18.433 2.1a1 1 0 0 1 1.225.707l2.071 7.727a1 1 0 0 1-.708 1.225L13 13.908V16h5a1 1 0 0 1 2 0v5a1 1 0 0 1-2 0v-3h-6a1 1 0 0 1-1-1v-2.556L5.567 15.9a1 1 0 0 1-1.225-.707L2.271 7.466a1 1 0 0 1 .708-1.225m13.592.499a1 1 0 0 0-1.226-.706a1 1 0 0 0-.706 1.224l.518 1.931a1 1 0 1 0 1.931-.517Zm-5.163 7.595l.702-.188c-.25-.027-.5.04-.702.188");
}
</style><path class="uxpswp3rm"/>`,
		"fallback": "coolicons:security-camera-fill-sharp",
	});
}

export default Component;
