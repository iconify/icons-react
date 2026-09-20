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
		"content": `<style>.on92o0npz {
  fill: currentColor;
  d: path("M7 14h8v-3l2 2V7l-2 2V6H7zm-5 8V2h20v16H6zm3.15-6H20V4H4v13.125zM4 16V4z");
}
</style><path class="on92o0npz"/>`,
		"fallback": "material-symbols:video-chat-outline-sharp",
	});
}

export default Component;
