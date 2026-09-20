import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.uqtd8jbej {
  fill: currentColor;
  d: path("M10 3a2 2 0 1 1 0 4a2 2 0 0 1 0-4m.5 4.959a3 3 0 1 0-1 0V11h-2A1.5 1.5 0 0 0 6 12.5v.5H5a2 2 0 0 0-2 2v2.5a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5V15a2 2 0 0 0-2-2h-1v-.5a1.5 1.5 0 0 0-1.5-1.5h-2zM7.5 12h5a.5.5 0 0 1 .5.5v.5H7v-.5a.5.5 0 0 1 .5-.5M5 14h10a1 1 0 0 1 1 1v2H4v-2a1 1 0 0 1 1-1");
}
</style><path class="uqtd8jbej"/>`,
		"fallback": "fluent:joystick-20-regular",
	});
}

export default Component;
