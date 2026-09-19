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
		"content": `<style>.gyvqrbb9m {
  fill: currentColor;
  d: path("M2 2v20l4-4h16V2zm15 11l-2-1.99V14H7V6h8v2.99L17 7z");
}
</style><path class="gyvqrbb9m"/>`,
		"fallback": "ic:sharp-video-chat",
	});
}

export default Component;
