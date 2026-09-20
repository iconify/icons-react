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
		"content": `<style>.ieosnq7hd {
  fill: currentColor;
  d: path("m13.75 23.25l-1.4-1.425L14.175 20H6V7.825l2 2V18h6.175l-1.825-1.825l1.4-1.425L18 19zM18 16.175l-2-2V6H9.825l1.825 1.825l-1.4 1.425L6 5L10.25.75l1.4 1.425L9.825 4H18z");
}
</style><path class="ieosnq7hd"/>`,
		"fallback": "material-symbols:screen-rotation-up-outline-sharp",
	});
}

export default Component;
