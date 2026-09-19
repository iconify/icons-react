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
		"content": `<style>.risb1mboy {
  fill: currentColor;
  d: path("M4 17.17L5.17 16H20V4H4zM11 6h2v4h-2zm0 6h2v2h-2z");
  opacity: var(--svg-opacity--0-3, 0.3);
}

.tz6qxzbup {
  fill: currentColor;
  d: path("M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m0 14H5.17L4 17.17V4h16zm-9-4h2v2h-2zm0-6h2v4h-2z");
}
</style><path class="risb1mboy"/><path class="tz6qxzbup"/>`,
		"fallback": "ic:twotone-sms-failed",
	});
}

export default Component;
