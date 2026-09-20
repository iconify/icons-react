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
		"content": `<style>.vchyw4bzn {
  fill: var(--svg-color--5e5e5e, #5e5e5e);
  d: path("M6.937 5.812V3L12 8.012L17.063 3v2.812L12 10.875zm0 12.375V21L12 15.988L17.063 21v-2.813L12 13.125zm11.25-1.125H21L15.988 12L21 6.937h-2.813L13.125 12zm-12.375 0H3L8.012 12L3 6.937h2.812L10.875 12z");
}
</style><path class="vchyw4bzn"/>`,
		"fallback": "token-branded:lcx",
	});
}

export default Component;
