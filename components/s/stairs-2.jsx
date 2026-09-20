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
		"content": `<style>.thrpz258i {
  fill: currentColor;
  d: path("M3 18v-1h5.664v-5.5h5.663V6H21v1h-5.663v5.5H9.673V18z");
}
</style><path class="thrpz258i"/>`,
		"fallback": "material-symbols-light:stairs-2",
	});
}

export default Component;
