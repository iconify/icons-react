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
		"content": `<style>.aqhgnwbsv {
  cx: 15px;
  cy: 12px;
  r: 3px;
  fill: currentColor;
  opacity: var(--svg-opacity--0-3, 0.3);
}

.k_frv5bhd {
  fill: currentColor;
  d: path("M10.1 13a5 5 0 1 0 0-2H5.83l1.59-1.59L6 8l-4 4l4 4l1.41-1.41L5.83 13zm4.9 2c-1.66 0-3-1.34-3-3s1.34-3 3-3s3 1.34 3 3s-1.34 3-3 3");
}
</style><circle class="aqhgnwbsv"/><path class="k_frv5bhd"/>`,
		"fallback": "ic:twotone-swipe-left-alt",
	});
}

export default Component;
