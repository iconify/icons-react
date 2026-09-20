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
		"content": `<style>.ys5ay2bag {
  fill: currentColor;
  d: path("M3 21v-8h2v6h6v2zm10 0v-2h6v-6h2v8zm-7-4l3-4l2.25 3l3-4L18 17zm-3-6V3h8v2H5v6zm16 0V5h-6V3h8v8zm-4.575-1.425Q14 9.15 14 8.5t.425-1.075T15.5 7t1.075.425T17 8.5t-.425 1.075T15.5 10t-1.075-.425");
}
</style><path class="ys5ay2bag"/>`,
		"fallback": "material-symbols:wallpaper-sharp",
	});
}

export default Component;
