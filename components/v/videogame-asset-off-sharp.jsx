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
		"content": `<style>.ajyrj0bom {
  fill: currentColor;
  d: path("M2 18V5.975h3.975L15 15h-2.85L1.375 4.225L2.8 2.8l18.4 18.4l-1.425 1.425L15.15 18zM8.85 6H22v11.875h-1.275zm8.65 3q-.625 0-1.062.438T16 10.5t.438 1.063T17.5 12t1.063-.437T19 10.5t-.437-1.062T17.5 9M7 15h2v-2h2v-2H9V9H7v2H5v2h2z");
}
</style><path class="ajyrj0bom"/>`,
		"fallback": "material-symbols:videogame-asset-off-sharp",
	});
}

export default Component;
