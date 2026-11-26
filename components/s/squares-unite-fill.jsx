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
		"content": `<style>.vceyew12d {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M9 2L13 2C14.6569 2 16 3.3431 16 5L16 8L19 8C20.6569 8 22 9.3431 22 11L22 19C22 20.6569 20.6569 22 19 22L11 22C9.3431 22 8 20.6569 8 19L8 16L5 16C3.3431 16 2 14.6569 2 13L2 5C2 3.3431 3.3431 2 5 2Z");
}
</style><path clip-rule="evenodd" class="vceyew12d"/>`,
		"fallback": "keyline-icons:squares-unite-fill",
	});
}

export default Component;
