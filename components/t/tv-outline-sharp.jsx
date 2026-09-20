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
		"content": `<style>.h5hr1fbfx {
  fill: currentColor;
  d: path("M8 21v-2H2V3h20v16h-6v2zm-4-4h16V5H4zm0 0V5z");
}
</style><path class="h5hr1fbfx"/>`,
		"fallback": "material-symbols:tv-outline-sharp",
	});
}

export default Component;
