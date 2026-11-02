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
		"content": `<style>.k_2r053ct {
  fill: currentColor;
  d: path("M5 9a7 7 0 1 1 14 0v6a7 7 0 1 1-14 0Zm8 1V7a1 1 0 0 0-2 0v3a1 1 0 0 0 2 0");
}
</style><path class="k_2r053ct"/>`,
		"fallback": "coolicons:mouse-fill",
	});
}

export default Component;
