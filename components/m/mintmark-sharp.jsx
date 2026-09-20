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
		"content": `<style>.xkh5csbxx {
  fill: currentColor;
  d: path("M13.385 20.5v-1h5.292l-5.292-5.292v-1.416l6 6V13.5h1v7zm-6.77-4v-1h-3v-1h6v-4h-6v-6h3v-1h1v1h3v1h-6v4h6v6h-3v1z");
}
</style><path class="xkh5csbxx"/>`,
		"fallback": "material-symbols-light:mintmark-sharp",
	});
}

export default Component;
