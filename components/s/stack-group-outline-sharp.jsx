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
		"content": `<style>.cjedobbob {
  fill: currentColor;
  d: path("M9 21v-6H3V3h12v6h6v12zm1-1h10V10h-6V4H4v10h6zm2-8");
}
</style><path class="cjedobbob"/>`,
		"fallback": "material-symbols-light:stack-group-outline-sharp",
	});
}

export default Component;
