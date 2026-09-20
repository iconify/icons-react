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
		"content": `<style>.xogtv_ogp {
  fill: currentColor;
  d: path("M11.667 21.671L3 13.004L12.992 3h8.693v8.692zm.02-1.421l8.998-8.965V4.018h-7.266l-8.998 8.966zm6.44-12.692q.425 0 .722-.292t.297-.708q0-.425-.295-.722t-.716-.298t-.715.295t-.293.717t.292.714t.708.294m-5.571 4.577");
}
</style><path class="xogtv_ogp"/>`,
		"fallback": "material-symbols-light:shoppingmode-outline-sharp",
	});
}

export default Component;
