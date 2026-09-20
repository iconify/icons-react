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
		"content": `<style>.dgv21k0-k {
  fill: currentColor;
  d: path("M4 20V3h1v2h14V3h1v17h-1V9.77H5V20zm7.5 0v-2.827H8.673v-1h6.635v1H12.5V20z");
}
</style><path class="dgv21k0-k"/>`,
		"fallback": "material-symbols-light:pergola-sharp",
	});
}

export default Component;
