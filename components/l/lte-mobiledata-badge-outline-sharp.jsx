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
		"content": `<style>.psgdf891z {
  fill: currentColor;
  d: path("M4 16h5v-2H6V8H4zm6 0h2v-6h2V8H8v2h2zm5 0h5v-2h-3v-1h2v-2h-2v-1h3V8h-5zM1 21V3h22v18zm2-2h18V5H3zm0 0V5z");
}
</style><path class="psgdf891z"/>`,
		"fallback": "material-symbols:lte-mobiledata-badge-outline-sharp",
	});
}

export default Component;
