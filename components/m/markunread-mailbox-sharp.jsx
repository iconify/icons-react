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
		"content": `<style>.ar-oh8bhs {
  fill: currentColor;
  d: path("M3 21V9h3.616V3h6.5v3.616h-5.5V14H10V9h11v12z");
}
</style><path class="ar-oh8bhs"/>`,
		"fallback": "material-symbols-light:markunread-mailbox-sharp",
	});
}

export default Component;
