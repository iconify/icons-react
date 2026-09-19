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
		"content": `<style>.uydn-q5_t {
  fill: currentColor;
  d: path("M20 2H4v20h16zM6 4h5v8l-2.5-1.5L6 12z");
}
</style><path class="uydn-q5_t"/>`,
		"fallback": "ic:sharp-book",
	});
}

export default Component;
