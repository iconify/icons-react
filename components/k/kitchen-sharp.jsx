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
		"content": `<style>.zm-9o_b9j {
  fill: currentColor;
  d: path("M8.192 8h1V5.385h-1zm0 8.116h1v-4.347h-1zM5 21V10.385h14V21zM5 9.385V3h14v6.385z");
}
</style><path class="zm-9o_b9j"/>`,
		"fallback": "material-symbols-light:kitchen-sharp",
	});
}

export default Component;
