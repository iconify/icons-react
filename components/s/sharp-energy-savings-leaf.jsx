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
		"content": `<style>.x9m8y2bnt {
  fill: currentColor;
  d: path("M12 3c-4.8 0-9 3.86-9 9c0 2.12.74 4.07 1.97 5.61L3 19.59L4.41 21l1.97-1.97A9 9 0 0 0 12 21c2.3 0 4.61-.88 6.36-2.64A8.95 8.95 0 0 0 21 12V3zm-1.5 14l-.5-.5l2.5-3.5l-5-.5l6-5.5l.5.5l-2.5 3.5l5 .5z");
}
</style><path class="x9m8y2bnt"/>`,
		"fallback": "ic:sharp-energy-savings-leaf",
	});
}

export default Component;
