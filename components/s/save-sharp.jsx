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
		"content": `<style>.s73-_camz {
  fill: currentColor;
  d: path("M21 7v14H3V3h14zm-6.875 10.125Q15 16.25 15 15t-.875-2.125T12 12t-2.125.875T9 15t.875 2.125T12 18t2.125-.875M6 10h9V6H6z");
}
</style><path class="s73-_camz"/>`,
		"fallback": "material-symbols:save-sharp",
	});
}

export default Component;
