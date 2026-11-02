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
		"content": `<style>.a8fmf-iqn {
  fill: currentColor;
  d: path("M2 20V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1M15.685 9.557A4 4 0 0 0 16 8a1 1 0 0 0-2 0a2 2 0 1 1-4 0a1 1 0 0 0-2 0a4 4 0 0 0 3.999 4c1.607 0 3.06-.963 3.686-2.443");
}
</style><path class="a8fmf-iqn"/>`,
		"fallback": "coolicons:shopping-bag-alt-fill-sharp",
	});
}

export default Component;
