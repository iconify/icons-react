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
		"content": `<style>.yw5gybb0u {
  fill: currentColor;
  d: path("M10 15v6a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-6H3a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h7.764l9.789-4.894A1 1 0 0 1 22 3v16a1 1 0 0 1-1.447.894L10.764 15Zm0-2V9H4v4Zm-4 7h2v-5H6Z");
}
</style><path class="yw5gybb0u"/>`,
		"fallback": "coolicons:megaphone-fill-sharp",
	});
}

export default Component;
