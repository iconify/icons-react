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
		"content": `<style>.ie1jaz9yl {
  fill: currentColor;
  d: path("M10 19H5V5h2v3h10V5h2v6h2V5c0-1.1-.9-2-2-2h-4.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h5zm2-16c.55 0 1 .45 1 1s-.45 1-1 1s-1-.45-1-1s.45-1 1-1");
}

.jxir1-bni {
  fill: currentColor;
  d: path("M10 17c0-3.31 2.69-6 6-6h3V5h-2v3H7V5H5v14h5z");
  opacity: var(--svg-opacity--0-3, 0.3);
}

.luprwpbby {
  fill: currentColor;
  d: path("m18.01 13l-1.42 1.41l1.58 1.58H12v2h6.17l-1.58 1.59l1.42 1.41l3.99-4z");
}
</style><path class="jxir1-bni"/><path class="ie1jaz9yl"/><path class="luprwpbby"/>`,
		"fallback": "ic:twotone-content-paste-go",
	});
}

export default Component;
