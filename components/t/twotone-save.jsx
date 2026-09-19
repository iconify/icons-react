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
		"content": `<style>.db3x8nb0r {
  fill: currentColor;
  d: path("M17 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V7zm2 16H5V5h11.17L19 7.83zm-7-7c-1.66 0-3 1.34-3 3s1.34 3 3 3s3-1.34 3-3s-1.34-3-3-3M6 6h9v4H6z");
}

.r-3rq5rhk {
  fill: currentColor;
  d: path("M5 5v14h14V7.83L16.17 5zm7 13c-1.66 0-3-1.34-3-3s1.34-3 3-3s3 1.34 3 3s-1.34 3-3 3m3-8H6V6h9z");
  opacity: var(--svg-opacity--0-3, 0.3);
}
</style><path class="r-3rq5rhk"/><path class="db3x8nb0r"/>`,
		"fallback": "ic:twotone-save",
	});
}

export default Component;
