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
		"content": `<style>.n0h5acsgt {
  fill: currentColor;
  d: path("M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2M6 7h5v1.5H6zm13 12H5L19 5zm-4.5-3v2H16v-2h2v-1.5h-2v-2h-1.5v2h-2V16z");
}

.wcdzo3bqj {
  fill: currentColor;
  d: path("M19 19V5L5 19zm-4.5-4.5v-2H16v2h2V16h-2v2h-1.5v-2h-2v-1.5z");
  opacity: var(--svg-opacity--0-3, 0.3);
}
</style><path class="wcdzo3bqj"/><path class="n0h5acsgt"/>`,
		"fallback": "ic:twotone-exposure",
	});
}

export default Component;
