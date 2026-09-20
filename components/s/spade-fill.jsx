import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.dgp82c6we {
  fill: currentColor;
  d: path("M232 136a56 56 0 0 1-83.4 48.82l11.06 36.88A8 8 0 0 1 152 232h-48a8 8 0 0 1-7.66-10.3l11.06-36.88A56 56 0 0 1 24 136c0-32 17.65-62.84 51-89.27a234 234 0 0 1 49.89-30.11a7.93 7.93 0 0 1 6.16 0A234 234 0 0 1 181 46.73C214.35 73.16 232 104 232 136");
}
</style><path class="dgp82c6we"/>`,
		"fallback": "ph:spade-fill",
	});
}

export default Component;
