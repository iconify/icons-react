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
		"content": `<style>.fwdt0v2ci {
  fill: currentColor;
  d: path("M11 15h2v-2h-2zM21 3H3v18h18zm-6 6h-4v2h4v6H9V7h6z");
}
</style><path class="fwdt0v2ci"/>`,
		"fallback": "ic:sharp-looks-6",
	});
}

export default Component;
