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
		"content": `<style>.nlh3b6xpn {
  fill: currentColor;
  d: path("M13.187 17.673L15 16.567l1.814 1.106l-.485-2.08l1.596-1.36l-2.09-.18L15 12.096l-.836 1.957l-2.089.18l1.596 1.36zM6.616 14v1H3V3h12v3.616h-1V4H4v10zM9 21V9h12v12z");
}
</style><path class="nlh3b6xpn"/>`,
		"fallback": "material-symbols-light:stack-star-sharp",
	});
}

export default Component;
