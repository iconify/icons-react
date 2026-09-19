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
		"content": `<style>.fslpexb5p {
  fill: currentColor;
  d: path("M6 17.59L7.41 19L12 14.42L16.59 19L18 17.59l-6-6z");
}

.x_--2ub-q {
  fill: currentColor;
  d: path("m6 11l1.41 1.41L12 7.83l4.59 4.58L18 11l-6-6z");
}
</style><path class="fslpexb5p"/><path class="x_--2ub-q"/>`,
		"fallback": "ic:sharp-keyboard-double-arrow-up",
	});
}

export default Component;
