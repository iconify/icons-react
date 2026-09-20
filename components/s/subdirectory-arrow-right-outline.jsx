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
		"content": `<style>.giwswjaxb {
  fill: currentColor;
  d: path("m14 21l-1.425-1.425l3.6-3.575H5V4h2v10h9.175l-3.6-3.6l1.4-1.425L20 15z");
}
</style><path class="giwswjaxb"/>`,
		"fallback": "material-symbols:subdirectory-arrow-right-outline",
	});
}

export default Component;
