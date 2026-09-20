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
		"content": `<style>.qx_2-m0zn {
  fill: currentColor;
  d: path("M8 8h2V5H8zm0 9h2v-5H8zm-4 5V11h16v11zM4 9V2h16v7z");
}
</style><path class="qx_2-m0zn"/>`,
		"fallback": "material-symbols:kitchen-sharp",
	});
}

export default Component;
