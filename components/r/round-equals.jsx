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
		"content": `<style>.wlxuxlbuw {
  fill: currentColor;
  d: path("M18 9.998H6a1 1 0 1 1 0-2h12a1 1 0 0 1 0 2m0 6H6a1 1 0 0 1 0-2h12a1 1 0 0 1 0 2");
}
</style><path class="wlxuxlbuw"/>`,
		"fallback": "ic:round-equals",
	});
}

export default Component;
