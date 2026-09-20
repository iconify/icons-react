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
		"content": `<style>.ewxoehy-p {
  fill: currentColor;
  d: path("M9.385 9.192h8v-2h-8zM4 20V4h16v16zm1-1h14V5H5zM5 5v14z");
}
</style><path class="ewxoehy-p"/>`,
		"fallback": "material-symbols-light:position-top-right-outline-sharp",
	});
}

export default Component;
