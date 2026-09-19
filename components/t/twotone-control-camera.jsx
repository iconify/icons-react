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
		"content": `<style>.uo30__jbm {
  fill: currentColor;
  d: path("M7.3 13.77L5.54 12l1.76-1.77l-1.76-1.77L2 12l3.54 3.54zm8.24 4.69l-1.77-1.76L12 18.46l-1.77-1.76l-1.77 1.76L12 22zm2.92-2.92L22 12l-3.54-3.54l-1.76 1.77L18.46 12l-1.76 1.77zM12 5.54l1.77 1.76l1.77-1.76L12 2L8.46 5.54l1.77 1.76z");
}

.v4i2ew1ke {
  cx: 12px;
  cy: 12px;
  r: 3px;
  fill: currentColor;
}
</style><path class="uo30__jbm"/><circle class="v4i2ew1ke"/>`,
		"fallback": "ic:twotone-control-camera",
	});
}

export default Component;
