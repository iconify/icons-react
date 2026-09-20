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
		"content": `<style>.n26j2r8gq {
  fill: currentColor;
  d: path("M13.95 22h-3.9v-4H3l4-6H5l7-10l7 10h-2l4 6h-7.05z");
}
</style><path class="n26j2r8gq"/>`,
		"fallback": "material-symbols:park",
	});
}

export default Component;
