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
		"content": `<style>.y_k1sx4qx {
  fill: currentColor;
  d: path("M3 19V5h1.616l1.5 3h3l-1.5-3h2l1.5 3h3l-1.5-3h2l1.5 3h3l-1.5-3H21v14z");
}
</style><path class="y_k1sx4qx"/>`,
		"fallback": "material-symbols-light:movie-sharp",
	});
}

export default Component;
