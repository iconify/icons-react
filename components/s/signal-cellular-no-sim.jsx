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
		"content": `<style>.llj9s3bkp {
  fill: currentColor;
  d: path("M18.99 5c0-1.1-.89-2-1.99-2h-7L7.66 5.34L19 16.68zM3.65 3.88L2.38 5.15L5 7.77V19c0 1.1.9 2 2 2h10.01c.35 0 .67-.1.96-.26l1.88 1.88l1.27-1.27z");
}
</style><path class="llj9s3bkp"/>`,
		"fallback": "ic:signal-cellular-no-sim",
	});
}

export default Component;
