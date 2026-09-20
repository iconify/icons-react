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
		"content": `<style>.iideafbvu {
  fill: currentColor;
  d: path("M3 19V5h18v14zm1-1.815l12.185-3.212L14.119 6H4zm.817.815H20V6h-4.844l2.248 8.692zM4 6");
}
</style><path class="iideafbvu"/>`,
		"fallback": "material-symbols-light:transition-chop-outline-sharp",
	});
}

export default Component;
