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
		"content": `<style>.nf3hn2w_r {
  fill: currentColor;
  d: path("M11.5 12.846V4h1v8.846zM4 20v-4.038h1V19h14v-3.038h1V20zm7.308-3.384V15.23h1.384v1.385z");
}
</style><path class="nf3hn2w_r"/>`,
		"fallback": "material-symbols-light:partner-reports-outline-sharp",
	});
}

export default Component;
