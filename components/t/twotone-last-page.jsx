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
		"content": `<style>.m1-1yjr8e {
  fill: currentColor;
  d: path("M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6l-6-6zM16 6h2v12h-2z");
}
</style><path class="m1-1yjr8e"/>`,
		"fallback": "ic:twotone-last-page",
	});
}

export default Component;
