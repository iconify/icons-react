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
		"content": `<style>.pbx79ib5v {
  fill: currentColor;
  d: path("M3 21V8h5V3h13v18zm13-2h3V5h-9v3h6zm-6 0h4v-9h-4zm-5 0h3v-9H5zM16 8v2zm0 0");
}
</style><path class="pbx79ib5v"/>`,
		"fallback": "material-symbols:responsive-layout-outline-sharp",
	});
}

export default Component;
