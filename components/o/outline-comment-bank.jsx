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
		"content": `<style>.xr4yj7fak {
  fill: currentColor;
  d: path("M18 14V6h-5v8l2.5-1.5z");
}

.z2l0rtbum {
  fill: currentColor;
  d: path("M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m0 14H6l-2 2V4h16z");
}
</style><path class="xr4yj7fak"/><path class="z2l0rtbum"/>`,
		"fallback": "ic:outline-comment-bank",
	});
}

export default Component;
