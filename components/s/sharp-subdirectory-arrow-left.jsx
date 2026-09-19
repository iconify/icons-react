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
		"content": `<style>.t_b3zub-s {
  fill: currentColor;
  d: path("m11 9l1.42 1.42L8.83 14H18V4h2v12H8.83l3.59 3.58L11 21l-6-6z");
}
</style><path class="t_b3zub-s"/>`,
		"fallback": "ic:sharp-subdirectory-arrow-left",
	});
}

export default Component;
