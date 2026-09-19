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
		"content": `<style>.htbvunzrj {
  fill: currentColor;
  d: path("m16.36 7.58l-.86 9.41H17l3.16-7.89zM3.84 9.1L7 16.99h1.5l-.86-9.41zM10 16.99h4L15 6H9zm10.32-4.24l-1.81 4.5l1.95.96l2.06-1.22zM1.48 16.99l2.06 1.22l1.95-.96l-1.81-4.5z");
}
</style><path class="htbvunzrj"/>`,
		"fallback": "ic:sharp-bakery-dining",
	});
}

export default Component;
