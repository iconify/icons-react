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
		"content": `<style>.d7y5g251x {
  fill: currentColor;
  d: path("M17 20.5V18h-2.5v-1H17v-2.5h1V17h2.5v1H18v2.5zM6 18v-3.5h1V17h2.5v1zm0-8.5V6h3.5v1H7v2.5zm11 0V7h-2.5V6H18v3.5z");
}
</style><path class="d7y5g251x"/>`,
		"fallback": "material-symbols-light:screenshot-region-outline-sharp",
	});
}

export default Component;
