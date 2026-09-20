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
		"content": `<style>.h_oz0vb7o {
  fill: currentColor;
  d: path("M4 22V2h16v20zm1-4.461V21h14v-3.462zm5.23 2.115h3.54v-.77h-3.54zM5 16.538h14V5.5H5zM5 4.5h14V3H5zm0 0V3zm0 13.039V21z");
}
</style><path class="h_oz0vb7o"/>`,
		"fallback": "material-symbols-light:tablet-android-outline-sharp",
	});
}

export default Component;
