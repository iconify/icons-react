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
		"content": `<style>.fk4hx468i {
  fill: currentColor;
  d: path("M8.59 16.59L13.17 12L8.59 7.41L10 6l6 6l-6 6z");
}
</style><path class="fk4hx468i"/>`,
		"fallback": "ic:twotone-keyboard-arrow-right",
	});
}

export default Component;
