import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":28,"height":28};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.qvmqlxbqe {
  fill: currentColor;
  d: path("m17 7.349l-1.698-3.441c-.532-1.078-2.069-1.078-2.6 0L10.01 9.36l-6.017.875c-1.19.173-1.664 1.634-.804 2.473l4.355 4.244l-1.028 5.993c-.203 1.185 1.04 2.088 2.104 1.529l5.382-2.83L17 23.221z");
}
</style><path class="qvmqlxbqe"/>`,
		"fallback": "fluent:star-three-quarter-28-filled",
	});
}

export default Component;
