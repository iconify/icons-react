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
		"content": `<style>.yuv-fubil {
  fill: currentColor;
  d: path("M9.5 21v-3L6 14.5V7.075h1.075L9 9H8v4.65l3.5 3.5V19h1v-1.85l.925-.925L1.4 4.2l1.4-1.4l18.4 18.4l-1.4 1.4l-4.95-4.95l-.35.35v3zm7.65-6.7L16 13.15V9h-4.15L8 5.15V3h2v4h4V3h2v4h2v6.45zm-6.45-.775");
}
</style><path class="yuv-fubil"/>`,
		"fallback": "material-symbols:power-plug-off-outline-sharp",
	});
}

export default Component;
