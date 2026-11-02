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
		"content": `<style>.f5jngf2xf {
  fill: currentColor;
  d: path("M19 6a1 1 0 0 1 0 2h-8a1 1 0 0 1 0-2Zm0 5a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Zm0 5a1 1 0 0 1 0 2h-8a1 1 0 0 1 0-2Z");
}
</style><path class="f5jngf2xf"/>`,
		"fallback": "coolicons:menu-alt-2-fill-sharp",
	});
}

export default Component;
