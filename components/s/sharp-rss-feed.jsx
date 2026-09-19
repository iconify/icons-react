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
		"content": `<style>.rkvc4mvdo {
  cx: 6.18px;
  cy: 17.82px;
  r: 2.18px;
  fill: currentColor;
}

.tiskvbx_j {
  fill: currentColor;
  d: path("M4 10.1v2.83c3.9 0 7.07 3.17 7.07 7.07h2.83c0-5.47-4.43-9.9-9.9-9.9m0-5.66v2.83c7.03 0 12.73 5.7 12.73 12.73h2.83c0-8.59-6.97-15.56-15.56-15.56");
}
</style><circle class="rkvc4mvdo"/><path class="tiskvbx_j"/>`,
		"fallback": "ic:sharp-rss-feed",
	});
}

export default Component;
