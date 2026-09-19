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
		"content": `<style>.nwlo05byk {
  fill: currentColor;
  d: path("M17 5.55v.18c0 .37.23.69.57.85C19.6 7.54 21 9.61 21 12s-1.4 4.46-3.43 5.42c-.34.16-.57.47-.57.84v.18c0 .68.71 1.11 1.32.82C21.08 18.01 23 15.23 23 12s-1.92-6.01-4.68-7.27c-.61-.28-1.32.14-1.32.82");
}

.z59go1_xr {
  cx: 9px;
  cy: 12px;
  r: 8px;
  fill: currentColor;
}
</style><circle class="z59go1_xr"/><path class="nwlo05byk"/>`,
		"fallback": "ic:round-fiber-smart-record",
	});
}

export default Component;
