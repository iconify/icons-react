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
		"content": `<style>.dfw50oy7i {
  fill: currentColor;
  d: path("M3 2h5v8H6v10h3v-5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v5h3V10h-2V2h5a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-1v11a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V10H3a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1m11 0v8h-4V2Zm-3 18h2v-4h-2Z");
}
</style><path class="dfw50oy7i"/>`,
		"fallback": "coolicons:store-fill-sharp",
	});
}

export default Component;
