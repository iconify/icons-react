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
		"content": `<style>.ph_7qmb-f {
  fill: currentColor;
  d: path("M1 20V9.525L8 4V1h2v3l7 5.5V13h-2v-2.475l-3-2.4V20h-2V6.55l-1-.8l-1 .8L8.05 20zm2-2h3.05L6 8.125l-3 2.4zm10 2v-6h4.5v6zm1.5-1.5H16v-3h-1.5zm4 3.5v-3.75h3v-.75h-3V16H23v3.75h-3v.75h3V22zm-5-8.95");
}
</style><path class="ph_7qmb-f"/>`,
		"fallback": "material-symbols:vo2-max-outline-sharp",
	});
}

export default Component;
