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
		"content": `<style>.jtofgs8-e {
  fill: currentColor;
  d: path("M7.5 13.5h7v-2.961l1.923 1.923V7.539L14.5 9.46V6.5h-7zM3 20.077V3h18v14H6.077z");
}
</style><path class="jtofgs8-e"/>`,
		"fallback": "material-symbols-light:video-chat-sharp",
	});
}

export default Component;
