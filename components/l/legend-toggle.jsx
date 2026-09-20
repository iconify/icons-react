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
		"content": `<style>.lptio0b6d {
  fill: currentColor;
  d: path("M4.5 18.27v-1h15v1zm0-3.77v-1h15v1zm0-4.154V9.17l5.48-3.342L15 9.397l4.5-3.205v1.239L15 10.616L9.944 7.035z");
}
</style><path class="lptio0b6d"/>`,
		"fallback": "material-symbols-light:legend-toggle",
	});
}

export default Component;
