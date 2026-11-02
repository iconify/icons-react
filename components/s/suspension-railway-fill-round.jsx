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
		"content": `<style>.kseg36x3e {
  fill: currentColor;
  d: path("M21 3a1 1 0 0 1 0 2h-5v3h1c.265 0 .52.105.707.293l4 4A1 1 0 0 1 22 13v5a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-6a4 4 0 0 1 4-4V5H3a1 1 0 0 1 0-2Zm-7 2H8v3h6Zm-8 5c-.527 0-1.028.204-1.402.574l-.001.001A2 2 0 0 0 4 12v3h6v-5Zm6 5h8v-1.586L16.586 10H12Z");
}
</style><path class="kseg36x3e"/>`,
		"fallback": "coolicons:suspension-railway-fill-round",
	});
}

export default Component;
