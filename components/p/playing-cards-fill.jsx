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
		"content": `<style>.gtjflfbrm {
  fill: currentColor;
  d: path("M8 2h10a3 3 0 0 1 3 3v12a1 1 0 0 1-2 0V5a1 1 0 0 0-1-1H8a1 1 0 0 1 0-2M3 9a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3Zm9.832 4.445l-2-3a1 1 0 0 0-1.664 0l-2 3a1 1 0 0 0 0 1.11l2 3a1 1 0 0 0 1.664 0l2-3a1 1 0 0 0 0-1.11");
}
</style><path class="gtjflfbrm"/>`,
		"fallback": "coolicons:playing-cards-fill",
	});
}

export default Component;
