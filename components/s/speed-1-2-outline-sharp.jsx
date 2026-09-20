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
		"content": `<style>.nd_hy_bmb {
  fill: currentColor;
  d: path("M7 17V9H5V7h4v10zm3 0v-2h2v2zm3 0v-6h4V9h-4V7h6v6h-4v2h4v2z");
}
</style><path class="nd_hy_bmb"/>`,
		"fallback": "material-symbols:speed-1-2-outline-sharp",
	});
}

export default Component;
