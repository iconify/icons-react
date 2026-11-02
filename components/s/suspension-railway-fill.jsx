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
		"content": `<style>.t3zyam6oc {
  fill: currentColor;
  d: path("M21 3a1 1 0 0 1 0 2h-5v3h1c.265 0 .52.105.707.293l4 4A1 1 0 0 1 22 13v5a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-7a3 3 0 0 1 3-3h1V5H3a1 1 0 0 1 0-2Zm-7 2H8v3h6Zm-9 5a1 1 0 0 0-1 1v4h6v-5Zm7 5h8v-1.586L16.586 10H12Z");
}
</style><path class="t3zyam6oc"/>`,
		"fallback": "coolicons:suspension-railway-fill",
	});
}

export default Component;
