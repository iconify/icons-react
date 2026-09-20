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
		"content": `<style>.i77kucv2z {
  fill: currentColor;
  d: path("m15.5 19.925l-4.25-4.25l1.4-1.4l2.85 2.85l5.65-5.65l1.4 1.4zM21 10h-2V5h-2v3H7V5H5v14h6v2H3V3h6.175q.275-.875 1.075-1.437T12 1q1 0 1.788.563T14.85 3H21zm-8.287-5.287Q13 4.425 13 4t-.288-.712T12 3t-.712.288T11 4t.288.713T12 5t.713-.288");
}
</style><path class="i77kucv2z"/>`,
		"fallback": "material-symbols:inventory-sharp",
	});
}

export default Component;
