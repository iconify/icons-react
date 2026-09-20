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
		"content": `<style>.u-buxabby {
  fill: currentColor;
  d: path("M17 3.002a2.998 2.998 0 1 1-2.148 5.09l-5.457 3.12a3 3 0 0 1 0 1.577l5.458 3.119a2.998 2.998 0 1 1-.746 1.304l-5.457-3.12a2.998 2.998 0 1 1 0-4.184l5.457-3.12A3 3 0 0 1 17 3.003");
}
</style><path class="u-buxabby"/>`,
		"fallback": "fluent:share-android-24-filled",
	});
}

export default Component;
