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
		"content": `<style>.g4xm0ibis {
  fill: currentColor;
  d: path("M18 10.48V4H2v16h16v-6.48l4 3.98v-11zM5 16l2.38-3.17L9 15l2.62-3.5L15 16z");
}
</style><path class="g4xm0ibis"/>`,
		"fallback": "ic:sharp-video-camera-back",
	});
}

export default Component;
