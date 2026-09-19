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
		"content": `<style>.jn_mx8b4u {
  fill: currentColor;
  d: path("m11 8.17l-2-2V3h6v6h4l-3.59 3.59L13 10.17V5h-2zm10.19 13.02L2.81 2.81L1.39 4.22L6.17 9H5l7 7l.59-.59L15.17 18H5v2h12.17l2.61 2.61z");
}

.uzyc5cslt {
  fill: currentColor;
  d: path("M13 5h-2v3.17l2 2z");
  opacity: var(--svg-opacity--0-3, 0.3);
}
</style><path class="uzyc5cslt"/><path class="jn_mx8b4u"/>`,
		"fallback": "ic:twotone-file-download-off",
	});
}

export default Component;
