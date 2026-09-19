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
		"content": `<style>.fydc-gbnd {
  fill: currentColor;
  d: path("m8 6.83l.88.88a.996.996 0 1 0 1.41-1.41L7.71 3.71a.996.996 0 0 0-1.41 0L3.71 6.29A.996.996 0 1 0 5.12 7.7L6 6.83V13c0 1.1.9 2 2 2h8v5c0 .55.45 1 1 1s1-.45 1-1v-5c0-1.1-.9-2-2-2H8z");
}
</style><path class="fydc-gbnd"/>`,
		"fallback": "ic:round-turn-sharp-left",
	});
}

export default Component;
