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
		"content": `<style>.m5yv8g59w {
  fill: currentColor;
  d: path("M2 3a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3.586l2.293-2.293a1 1 0 0 1 1.414 0l5 5a1 1 0 0 1 0 1.414L18.414 13H21a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a5 5 0 0 1-5-5Zm16.586 7L15 6.414l-3 3v7.172ZM20 20v-5h-3.586l-5 5ZM7 16a1 1 0 0 0 0 2h.01a1 1 0 0 0 0-2Z");
}
</style><path class="m5yv8g59w"/>`,
		"fallback": "coolicons:swatches-fill-sharp",
	});
}

export default Component;
