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
		"content": `<style>.mvbuy1-8c {
  fill: currentColor;
  d: path("M21 3H3v18h18zm-6 10h-4v2h4v2H9v-6h4V9H9V7h6z");
}
</style><path class="mvbuy1-8c"/>`,
		"fallback": "ic:sharp-looks-two",
	});
}

export default Component;
