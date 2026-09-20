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
		"content": `<style>.ua5nk0e4q {
  fill: currentColor;
  d: path("m20 17.175l-2-2V8q0-.825-.587-1.412T16 6H8.825L7 4.15V2h3v2h4V2h3v2.15q1.3.35 2.15 1.4T20 8zm-3.5-3.5L14.825 12H16.5zM11.175 12v2H7.5v-2zm-6-6.825l1.4 1.4q-.275.275-.425.638T6 8v12h12v-1.975L20 20v2H4V8q0-.825.313-1.55t.862-1.275m14.6 17.425L1.4 4.225L2.8 2.8l18.375 18.4z");
}
</style><path class="ua5nk0e4q"/>`,
		"fallback": "material-symbols:no-backpack-outline-sharp",
	});
}

export default Component;
