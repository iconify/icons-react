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
		"content": `<style>.i2qvs1byi {
  fill: currentColor;
  d: path("M20 2H10L4 8v14h16zm-8 6h-2V4h2zm3 0h-2V4h2zm3 0h-2V4h2z");
}
</style><path class="i2qvs1byi"/>`,
		"fallback": "ic:sharp-sd-storage",
	});
}

export default Component;
