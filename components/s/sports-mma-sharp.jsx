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
		"content": `<style>.owk383bfb {
  fill: currentColor;
  d: path("M7 21v-4h10v4zm-1-5l-1-5.05V3h12v4h2v3.95L18 16zm2-6h6V7H8z");
}
</style><path class="owk383bfb"/>`,
		"fallback": "material-symbols:sports-mma-sharp",
	});
}

export default Component;
