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
		"content": `<style>.g-465vs2g {
  fill: currentColor;
  d: path("M232 92h-20V64a12 12 0 0 0-12-12H48a12 12 0 0 0-12 12v28H16a4 4 0 0 0 0 8h20v28a12 12 0 0 0 12 12h152a12 12 0 0 0 12-12v-28h20a4 4 0 0 1 4 4v50a4 4 0 0 1-2.9 3.84L132.7 186.5A12 12 0 0 0 124 198v34a4 4 0 0 0 8 0v-34a4 4 0 0 1 2.9-3.84l100.4-28.66A12 12 0 0 0 244 154v-50a12 12 0 0 0-12-12m-28 36a4 4 0 0 1-4 4H48a4 4 0 0 1-4-4V64a4 4 0 0 1 4-4h152a4 4 0 0 1 4 4Z");
}
</style><path class="g-465vs2g"/>`,
		"fallback": "ph:paint-roller-thin",
	});
}

export default Component;
