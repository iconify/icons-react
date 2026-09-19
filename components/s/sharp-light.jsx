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
		"content": `<style>.qio4mbnnv {
  fill: currentColor;
  d: path("M13 6.06V3h-2v3.06A9.006 9.006 0 0 0 3.22 17H8c0 2.21 1.79 4 4 4s4-1.79 4-4h4.78A9.006 9.006 0 0 0 13 6.06M12 15H5c0-3.86 3.14-7 7-7s7 3.14 7 7z");
}
</style><path class="qio4mbnnv"/>`,
		"fallback": "ic:sharp-light",
	});
}

export default Component;
