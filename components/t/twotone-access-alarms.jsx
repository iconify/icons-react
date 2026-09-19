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
		"content": `<style>.uepr53bpm {
  fill: currentColor;
  d: path("m22 5.7l-4.6-3.9l-1.3 1.5l4.6 3.9zM12.5 8H11v6l4.7 2.9l.8-1.2l-4-2.4zM12 4c-5 0-9 4-9 9s4 9 9 9s9-4 9-9s-4-9-9-9m0 16c-3.9 0-7-3.1-7-7s3.1-7 7-7s7 3.1 7 7s-3.1 7-7 7M7.9 3.4L6.6 1.9L2 5.7l1.3 1.5z");
}

.za4nees9e {
  fill: currentColor;
  d: path("M12 6c-3.9 0-7 3.1-7 7s3.1 7 7 7s7-3.1 7-7s-3.1-7-7-7m3.7 10.9L11 14V8h1.5v5.3l4 2.4z");
  opacity: var(--svg-opacity--0-3, 0.3);
}
</style><path class="za4nees9e"/><path class="uepr53bpm"/>`,
		"fallback": "ic:twotone-access-alarms",
	});
}

export default Component;
