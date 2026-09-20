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
		"content": `<style>.lprh5sbak {
  fill: currentColor;
  d: path("M14 17H3V7h18v3h-2V9H5v6h9zm-9-2V9zm11 2.6l2.1-2.1l-2.1-2.1l1.4-1.4l2.1 2.1l2.1-2.1l1.4 1.4l-2.075 2.1L23 17.6L21.6 19l-2.1-2.075L17.4 19z");
}
</style><path class="lprh5sbak"/>`,
		"fallback": "material-symbols:variable-remove-outline-sharp",
	});
}

export default Component;
