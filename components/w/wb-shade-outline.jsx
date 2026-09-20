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
		"content": `<style>.czaoy8bim {
  fill: currentColor;
  d: path("m19.25 19.23l-5.308-5.307v-1.346l6.654 6.654zm-5.308 0V17l2.231 2.23zm-9.23 0V9.617H3.404l4.538-4.539l4.539 4.539h-1.308v9.615zm1.692-4.691H9.48V9.615H6.404z");
}
</style><path class="czaoy8bim"/>`,
		"fallback": "material-symbols-light:wb-shade-outline",
	});
}

export default Component;
