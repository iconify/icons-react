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
		"content": `<style>.llcbwnbbo {
  fill: currentColor;
  d: path("M18.58 5H15V3H9v2H5.43L3 12v9h3v-2h12v2h3v-9zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16m11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5s1.5.67 1.5 1.5s-.67 1.5-1.5 1.5M5 11l1.5-4.5h11L19 11z");
}
</style><path class="llcbwnbbo"/>`,
		"fallback": "ic:sharp-local-taxi",
	});
}

export default Component;
