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
		"content": `<style>.snecruorz {
  fill: currentColor;
  d: path("M3 21V7h6v2H5v10h14V9h-4V7h6v14zm9-5l-4-4l1.4-1.4l1.6 1.575V0h2v12.175l1.6-1.575L16 12z");
}
</style><path class="snecruorz"/>`,
		"fallback": "material-symbols:place-item-outline-sharp",
	});
}

export default Component;
