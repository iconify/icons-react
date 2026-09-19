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
		"content": `<style>.iacizf6un {
  fill: currentColor;
  d: path("M21 3H3v18h18zm-6 6h-4v2h4v6H9v-2h4v-2H9V7h6z");
}
</style><path class="iacizf6un"/>`,
		"fallback": "ic:sharp-looks-5",
	});
}

export default Component;
