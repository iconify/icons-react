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
		"content": `<style>.krp4vgx8b {
  fill: currentColor;
  d: path("M8.126 5a4 4 0 0 1 7.748 0H19a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Zm2.141 0h3.466a2 2 0 0 0-3.466 0");
}
</style><path class="krp4vgx8b"/>`,
		"fallback": "coolicons:shopping-bag-fill-sharp",
	});
}

export default Component;
