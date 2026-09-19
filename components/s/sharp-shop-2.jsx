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
		"content": `<style>.ephfub3ut {
  fill: currentColor;
  d: path("M18 5V1h-8v4H5v13h18V5zm-6-2h4v2h-4zm0 12V8l5.5 3.5z");
}

.i6rivubjr {
  fill: currentColor;
  d: path("M3 9H1v13h18v-2H3z");
}
</style><path class="i6rivubjr"/><path class="ephfub3ut"/>`,
		"fallback": "ic:sharp-shop-2",
	});
}

export default Component;
