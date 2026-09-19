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
		"content": `<style>.bbe95rbet {
  fill: currentColor;
  d: path("M7 14c-1.66 0-3 1.34-3 3c0 1.31-1.16 2-2 2c.92 1.22 2.49 2 4 2c2.21 0 4-1.79 4-4c0-1.66-1.34-3-3-3m14.41-8.66l-2.75-2.75L9 12.25L11.75 15z");
}
</style><path class="bbe95rbet"/>`,
		"fallback": "ic:sharp-brush",
	});
}

export default Component;
