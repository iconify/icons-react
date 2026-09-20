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
		"content": `<style>.epygqxank {
  fill: currentColor;
  d: path("M3 19v-1h17V5h1v14zm6.923-3.384V9.923h7.693v5.693z");
}
</style><path class="epygqxank"/>`,
		"fallback": "material-symbols-light:picture-in-picture-small-outline-sharp",
	});
}

export default Component;
