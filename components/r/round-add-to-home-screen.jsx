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
		"content": `<style>.w8wa1szwz {
  fill: currentColor;
  d: path("M18 1.01L8 1c-1.1 0-2 .9-2 2v3c0 .55.45 1 1 1s1-.45 1-1V5h10v14H8v-1c0-.55-.45-1-1-1s-1 .45-1 1v3c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99M11 15c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1H6c-.55 0-1 .45-1 1s.45 1 1 1h2.59L3.7 14.89a.996.996 0 1 0 1.41 1.41L10 11.41V14c0 .55.45 1 1 1");
}
</style><path class="w8wa1szwz"/>`,
		"fallback": "ic:round-add-to-home-screen",
	});
}

export default Component;
