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
		"content": `<style>.h7endep0l {
  fill: currentColor;
  d: path("m12 16.5l4-4H8zM5 8h14V5H5zm0 11h14v-9H5zM5 8V5zM3 21V3h18v18z");
}
</style><path class="h7endep0l"/>`,
		"fallback": "material-symbols:top-panel-open-outline-sharp",
	});
}

export default Component;
