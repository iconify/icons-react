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
		"content": `<style>.j3nl0obvx {
  fill: currentColor;
  d: path("M2 21L6 3h12l4 18zm2.5-2h15L16.4 5H7.6zm6.5-7.175V16h2v-4.175l1.6 1.575L16 12l-4-4l-4 4l1.4 1.425zM19.5 19h-15z");
}
</style><path class="j3nl0obvx"/>`,
		"fallback": "material-symbols:tilt-arrow-up-outline-sharp",
	});
}

export default Component;
