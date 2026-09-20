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
		"content": `<style>.ruwuvqbjk {
  fill: currentColor;
  d: path("M4 20V4h16v16zm1-1h14v-7.615H5zm7-11h6V6h-6z");
}
</style><path class="ruwuvqbjk"/>`,
		"fallback": "material-symbols-light:tabs-sharp",
	});
}

export default Component;
