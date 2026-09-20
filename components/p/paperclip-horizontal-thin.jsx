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
		"content": `<style>.np_ea7b1t {
  fill: currentColor;
  d: path("M244 128a52.06 52.06 0 0 1-52 52H48a36 36 0 0 1 0-72h144a20 20 0 0 1 0 40H80a4 4 0 0 1 0-8h112a12 12 0 0 0 0-24H48a28 28 0 0 0 0 56h144a44 44 0 0 0 0-88H80a4 4 0 0 1 0-8h112a52.06 52.06 0 0 1 52 52");
}
</style><path class="np_ea7b1t"/>`,
		"fallback": "ph:paperclip-horizontal-thin",
	});
}

export default Component;
