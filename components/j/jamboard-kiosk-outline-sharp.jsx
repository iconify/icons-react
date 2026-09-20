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
		"content": `<style>.h_zl3-l6h {
  fill: currentColor;
  d: path("M6 21v-2h5v-3H2V3h20v13h-9v3h5v2zm-2-7h16V5H4zm0 0V5z");
}
</style><path class="h_zl3-l6h"/>`,
		"fallback": "material-symbols:jamboard-kiosk-outline-sharp",
	});
}

export default Component;
