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
		"content": `<style>.zt9xzb3hu {
  fill: currentColor;
  d: path("M19.59 4h-5.01c-.99 0-1.91.49-2.47 1.3L2 20h17l2.56-13.63C21.79 5.14 20.84 4 19.59 4M14.5 14a2.5 2.5 0 0 1 0-5a2.5 2.5 0 0 1 0 5");
}
</style><path class="zt9xzb3hu"/>`,
		"fallback": "ic:round-airlines",
	});
}

export default Component;
