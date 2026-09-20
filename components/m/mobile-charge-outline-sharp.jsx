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
		"content": `<style>.rnvwp3c3d {
  fill: currentColor;
  d: path("m11.5 17l3-6h-2V7l-3 6h2zM5 23V1h14v5.1h1v4.8h-1V23zm2-2h10V3H7zm0 0V3z");
}
</style><path class="rnvwp3c3d"/>`,
		"fallback": "material-symbols:mobile-charge-outline-sharp",
	});
}

export default Component;
