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
		"content": `<style>.jmfk_ccen {
  fill: currentColor;
  d: path("M9 16.175L13.175 12L9 7.825L4.825 12zM9 19l-7-7l7-7l6 6h7v2h-7zm0-7");
}
</style><path class="jmfk_ccen"/>`,
		"fallback": "material-symbols:line-start-diamond-outline-sharp",
	});
}

export default Component;
