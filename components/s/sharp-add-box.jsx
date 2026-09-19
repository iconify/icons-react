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
		"content": `<style>.kmdd1xg6b {
  fill: currentColor;
  d: path("M21 3H3v18h18zm-4 10h-4v4h-2v-4H7v-2h4V7h2v4h4z");
}
</style><path class="kmdd1xg6b"/>`,
		"fallback": "ic:sharp-add-box",
	});
}

export default Component;
