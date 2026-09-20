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
		"content": `<style>.qqg2ndtqi {
  fill: currentColor;
  d: path("M3 21L21 3v18zm13.789-1H20V5.427l-3.212 3.212z");
}
</style><path class="qqg2ndtqi"/>`,
		"fallback": "material-symbols-light:network-cell-outline-sharp",
	});
}

export default Component;
