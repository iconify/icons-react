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
		"content": `<style>.xuac1hb7e {
  fill: currentColor;
  d: path("M11 6a3 3 0 0 1 3-3h2a1 1 0 0 1 0 2h-2a.997.997 0 0 0-1 1v1a2 2 0 0 1 2 2v2h2a5 5 0 0 1 0 10h-7a4 4 0 0 1-4-4H4v3a1 1 0 0 1-2 0v-8a1 1 0 0 1 2 0v3h2a4.006 4.006 0 0 1 3-3.874V9a2 2 0 0 1 2-2Zm1.01 9H12a1 1 0 0 0 0 2h.01a1 1 0 0 0 0-2m4 0H16a1 1 0 0 0 0 2h.01a1 1 0 0 0 0-2");
}
</style><path class="xuac1hb7e"/>`,
		"fallback": "coolicons:submarine-fill-round",
	});
}

export default Component;
