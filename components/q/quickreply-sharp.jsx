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
		"content": `<style>.o43y7qbvi {
  fill: currentColor;
  d: path("M18.923 20.77V17h-1.23v-4.615h2.788l-1.123 3.23h1.757zM3 20.076V3h18v6.616h-6.077V17H6.077z");
}
</style><path class="o43y7qbvi"/>`,
		"fallback": "material-symbols-light:quickreply-sharp",
	});
}

export default Component;
