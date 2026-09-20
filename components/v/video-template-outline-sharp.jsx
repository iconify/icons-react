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
		"content": `<style>.y11tqke2e {
  fill: currentColor;
  d: path("M3.942 22v-2.366h1V21h14.116v-1.365h1V22zM3 17.25V6.75h18v10.5zm7.327-2.634L14.673 12l-4.346-2.615zM3.942 4.366V2h16.116v2.366h-1V3H4.942v1.366zM4 16.25h16v-8.5H4zM12 12");
}
</style><path class="y11tqke2e"/>`,
		"fallback": "material-symbols-light:video-template-outline-sharp",
	});
}

export default Component;
