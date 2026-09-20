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
		"content": `<style>.alklbdcdh {
  fill: currentColor;
  d: path("M3 20.077V3h18v14H6.077zm6.517-6.404L12 12.167l2.483 1.506l-.66-2.825l2.196-1.884l-2.886-.256L12 6.058l-1.133 2.65l-2.886.256l2.196 1.884z");
}
</style><path class="alklbdcdh"/>`,
		"fallback": "material-symbols-light:reviews-sharp",
	});
}

export default Component;
