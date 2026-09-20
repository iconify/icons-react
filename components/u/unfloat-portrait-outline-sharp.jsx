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
		"content": `<style>.mngza6bdp {
  fill: currentColor;
  d: path("M4 22V2h16v11h-2V4H6v16h7v2Zm10.5-10.925L11.425 8H14V6H8v6h2V9.4l3.075 3.1ZM15 22v-7h5v7Zm-3-10Z");
}
</style><path class="mngza6bdp"/>`,
		"fallback": "material-symbols:unfloat-portrait-outline-sharp",
	});
}

export default Component;
