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
		"content": `<style>.q7aqelbsu {
  fill: currentColor;
  d: path("M3 21v-2h18v2zm8-4v-6.175L9.4 12.4L8 11l4-4l4 4l-1.4 1.4l-1.6-1.575V17zM3 5V3h18v2z");
}
</style><path class="q7aqelbsu"/>`,
		"fallback": "material-symbols:text-select-move-up-outline-sharp",
	});
}

export default Component;
