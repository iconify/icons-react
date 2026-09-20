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
		"content": `<style>.dwkv2bcmj {
  fill: currentColor;
  d: path("M9 17h9v-3H9zm-6 4V3h18v18zm2-2h14V5H5zM5 5v14z");
}
</style><path class="dwkv2bcmj"/>`,
		"fallback": "material-symbols:position-bottom-right-outline-sharp",
	});
}

export default Component;
