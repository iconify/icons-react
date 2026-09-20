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
		"content": `<style>.h2maprk-h {
  fill: currentColor;
  d: path("M5 19V5v11.35v-2.125zm-2 2V3h18v10h-2V5H5v14h7v2zm14.35 1l-3.55-3.55l1.425-1.4l2.125 2.125l4.25-4.25L23 16.35zM11 13h6v-2h-6zm0-4h6V7h-6zm-4 4h2v-2H7zm0-4h2V7H7z");
}
</style><path class="h2maprk-h"/>`,
		"fallback": "material-symbols:list-alt-check-outline-sharp",
	});
}

export default Component;
