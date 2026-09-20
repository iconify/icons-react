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
		"content": `<style>.myix0_cqq {
  fill: currentColor;
  d: path("M4.325 9h15.35l-.85-3H5.2zM16.8 11H7.225l-.275 2h10.1zM4 20l1.225-9h-3.55l2-7h16.65l2 7H18.8l1.2 9h-2l-.675-5H6.675L6 20z");
}
</style><path class="myix0_cqq"/>`,
		"fallback": "material-symbols:table-restaurant-outline-sharp",
	});
}

export default Component;
