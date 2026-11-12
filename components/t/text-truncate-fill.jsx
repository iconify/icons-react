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
		"content": `<style>.gfq6j8nae {
  fill: currentColor;
  d: path("M3 5h18a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2m0 12h6a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2m10 0h.01a1 1 0 0 1 0 2H13a1 1 0 0 1 0-2m4 0h.01a1 1 0 0 1 0 2H17a1 1 0 0 1 0-2m4 2h-.01a1 1 0 0 1 0-2H21a1 1 0 0 1 0 2");
}
</style><path class="gfq6j8nae"/>`,
		"fallback": "coolicons:text-truncate-fill",
	});
}

export default Component;
