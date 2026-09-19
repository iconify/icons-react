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
		"content": `<style>.grlb0qosn {
  fill: currentColor;
  d: path("M15 11H9V8.5L5.5 12L9 15.5V13h6v2.5l3.5-3.5L15 8.5z");
}

.r4_kvvb8x {
  fill: currentColor;
  d: path("M20 4h-3.17L15 2H9L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2M9.88 4h4.24l1.83 2H20v12H4V6h4.05");
}
</style><path class="r4_kvvb8x"/><path class="grlb0qosn"/>`,
		"fallback": "ic:outline-switch-camera",
	});
}

export default Component;
