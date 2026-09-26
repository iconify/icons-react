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
		"content": `<style>.zse8x-bhi {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M2 6C2 3.79086 3.79086 2 6 2H18C20.2091 2 22 3.79086 22 6V18C22 20.2091 20.2091 22 18 22H6C3.79086 22 2 20.2091 2 18V6ZM8.5 6L15.5 6C16.8807 6 18 7.1193 18 8.5L18 15.5C18 16.8807 16.8807 18 15.5 18L8.5 18C7.1193 18 6 16.8807 6 15.5L6 8.5C6 7.1193 7.1193 6 8.5 6Z");
}
</style><path clip-rule="evenodd" class="zse8x-bhi"/>`,
		"fallback": "keyline-icons:square-full-fill",
	});
}

export default Component;
