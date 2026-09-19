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
		"content": `<style>.lr65sub2v {
  fill: currentColor;
  d: path("m21 12l-4.37 6.16c-.37.52-.98.84-1.63.84h-3v-2h3l3.55-5L15 7H5v3H3V7c0-1.1.9-2 2-2h10c.65 0 1.26.31 1.63.84zm-11 3H7v-3H5v3H2v2h3v3h2v-3h3z");
}
</style><path class="lr65sub2v"/>`,
		"fallback": "ic:outline-new-label",
	});
}

export default Component;
