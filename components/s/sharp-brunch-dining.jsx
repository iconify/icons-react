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
		"content": `<style>.twchx3b5i {
  fill: currentColor;
  d: path("M18 8h2V4h-2zm-2 14H2v-2h14zm2-6.11l-.4-.42a5.85 5.85 0 0 1-1.6-4V2h6v9.51c0 1.46-.54 2.87-1.53 3.94l-.47.52V20h2v2h-4zM7 16v-2h4v2h5v2H2v-2z");
}
</style><path class="twchx3b5i"/>`,
		"fallback": "ic:sharp-brunch-dining",
	});
}

export default Component;
