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
		"content": `<style>.jbjay1mqt {
  fill: currentColor;
  d: path("M3.73 20v-5h1v5zm2.77-2v-1h6v-4H6.996L9.4 5h7.2l2.404 8H13.5v5z");
}
</style><path class="jbjay1mqt"/>`,
		"fallback": "material-symbols-light:wall-lamp-sharp",
	});
}

export default Component;
