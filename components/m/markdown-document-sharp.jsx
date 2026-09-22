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
		"content": `<style>.akkl7mb6j {
  fill: currentColor;
  d: path("M13.077 21v-7.115H21V21h-1v-6.115h-2.461v4.25h-1v-4.25h-2.462V21zm-9.096-1V4H20v7.5H7.73v1h2.962v2.75H7.731v1h2.961V20z");
}
</style><path class="akkl7mb6j"/>`,
		"fallback": "material-symbols-light:markdown-document-sharp",
	});
}

export default Component;
