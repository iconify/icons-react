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
		"content": `<style>.dnbz8tbng {
  fill: currentColor;
  d: path("M18 1H5v22h13zm-6.5 21c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5s1.5.67 1.5 1.5s-.67 1.5-1.5 1.5m4.5-4H7V4h9z");
}
</style><path class="dnbz8tbng"/>`,
		"fallback": "ic:sharp-phone-iphone",
	});
}

export default Component;
