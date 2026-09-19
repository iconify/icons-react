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
		"content": `<style>.uhkw9ub4l {
  fill: currentColor;
  d: path("M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 16.01H3V4.99h18zM7 9h3V7H5v5h2zm12 3h-2v3h-3v2h5z");
}

.yt6d95b1h {
  fill: currentColor;
  d: path("M3 19.01h18V4.99H3zM14 15h3v-3h2v5h-5zM5 7h5v2H7v3H5z");
  opacity: var(--svg-opacity--0-3, 0.3);
}
</style><path class="yt6d95b1h"/><path class="uhkw9ub4l"/>`,
		"fallback": "ic:twotone-aspect-ratio",
	});
}

export default Component;
