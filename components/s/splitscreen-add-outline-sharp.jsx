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
		"content": `<style>.gsh7-osgp {
  fill: currentColor;
  d: path("M5 19v-4v.1v-.1zm-2 2v-8h18v2H5v4h10v2zm0-10V3h18v8zm2-2h14V5H5zm0 0V5zm14 12h-2v-2h2v-2h2v2h2v2h-2v2h-2z");
}
</style><path class="gsh7-osgp"/>`,
		"fallback": "material-symbols:splitscreen-add-outline-sharp",
	});
}

export default Component;
