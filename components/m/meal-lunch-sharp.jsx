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
		"content": `<style>.pp80-ibbd {
  fill: currentColor;
  d: path("M2 13v-3h2v3zm7.375-2.225L7.25 8.65l1.4-1.4l2.125 2.125zM2 8V2h6v1q0 2.075-1.463 3.538T3 8zm8-4V2h3v2zM1 22v-2h2l-1-4h12l-1 4h2.075l1.5-6h-4.25L12 10h10l-.825 10H23v2z");
}
</style><path class="pp80-ibbd"/>`,
		"fallback": "material-symbols:meal-lunch-sharp",
	});
}

export default Component;
