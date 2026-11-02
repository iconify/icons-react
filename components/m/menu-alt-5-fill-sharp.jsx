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
		"content": `<style>.rha5-6c-d {
  fill: currentColor;
  d: path("M19 6a1 1 0 0 1 0 2h-8a1 1 0 0 1 0-2Zm0 5a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Zm-6 5a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z");
}
</style><path class="rha5-6c-d"/>`,
		"fallback": "coolicons:menu-alt-5-fill-sharp",
	});
}

export default Component;
