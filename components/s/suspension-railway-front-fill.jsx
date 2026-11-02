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
		"content": `<style>.yf9qe91lb {
  fill: currentColor;
  d: path("M21 3a1 1 0 0 1 0 2h-5v3h1a3 3 0 0 1 3 3v7a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3v-7a3 3 0 0 1 3-3h1V5H3a1 1 0 0 1 0-2Zm-7 2h-4v3h4Zm3 5H7a1 1 0 0 0-1 1v2h12v-2a1 1 0 0 0-1-1m-7.99 6H9a1 1 0 0 0 0 2h.01a1 1 0 0 0 0-2M15 16a1 1 0 0 0 0 2h.01a1 1 0 0 0 0-2Z");
}
</style><path class="yf9qe91lb"/>`,
		"fallback": "coolicons:suspension-railway-front-fill",
	});
}

export default Component;
