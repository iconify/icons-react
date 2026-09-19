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
		"content": `<style>.n0rqd4bhg {
  fill: currentColor;
  d: path("m14.2 6l-6 6l6 6l1.41-1.41L11.03 12l4.58-4.59z");
}
</style><path class="n0rqd4bhg"/>`,
		"fallback": "ic:twotone-navigate-before",
	});
}

export default Component;
