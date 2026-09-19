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
		"content": `<style>.h3ty8tbnv {
  fill: currentColor;
  d: path("M8 6h8v2H8z");
}

.mp_rw7b0q {
  fill: currentColor;
  d: path("M19 1H5v22h14zm-2 18H7V5h10z");
}
</style><path class="mp_rw7b0q"/><path class="h3ty8tbnv"/>`,
		"fallback": "ic:sharp-ad-units",
	});
}

export default Component;
