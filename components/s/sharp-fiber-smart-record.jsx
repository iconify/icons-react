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
		"content": `<style>.h0bn7_biy {
  fill: currentColor;
  d: path("M17 4.26v2.09a5.99 5.99 0 0 1 0 11.3v2.09c3.45-.89 6-4.01 6-7.74s-2.55-6.85-6-7.74");
}

.z59go1_xr {
  cx: 9px;
  cy: 12px;
  r: 8px;
  fill: currentColor;
}
</style><circle class="z59go1_xr"/><path class="h0bn7_biy"/>`,
		"fallback": "ic:sharp-fiber-smart-record",
	});
}

export default Component;
