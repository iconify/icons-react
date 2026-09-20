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
		"content": `<style>.gfmj7abgv {
  fill: currentColor;
  d: path("M3 21V3h18v18zm2-2h14V5H5zm0 0V5zm11.25-2.75Q18 14.5 18 12t-1.75-4.25T12 6T7.75 7.75T6 12t1.75 4.25T12 18t4.25-1.75m-7.075-1.425Q8 13.65 8 12t1.175-2.825T12 8t2.825 1.175T16 12t-1.175 2.825T12 16t-2.825-1.175");
}
</style><path class="gfmj7abgv"/>`,
		"fallback": "material-symbols:vignette-2-outline-sharp",
	});
}

export default Component;
