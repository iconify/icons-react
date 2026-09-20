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
		"content": `<style>.zmm-1ie8r {
  fill: currentColor;
  d: path("M16.438 11.563Q16 11.125 16 10.5t.438-1.062T17.5 9t1.063.438T19 10.5t-.437 1.063T17.5 12t-1.062-.437M2 18V5.975h3.975L8 8H4v8h9.15L1.375 4.225L2.8 2.8l18.4 18.4l-1.425 1.425L15.15 18zm5-3v-2H5v-2h2V9h2v2h2v2H9v2zm15 2.875h-1.275L20 17.15V8h-9.15l-2-2H22zm-6.575-5.3");
}
</style><path class="zmm-1ie8r"/>`,
		"fallback": "material-symbols:videogame-asset-off-outline-sharp",
	});
}

export default Component;
