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
		"content": `<style>.xis5lhb-g {
  fill: currentColor;
  d: path("M2 21v-6.654h1V20h6.654v1zm12.346 0v-1H21v-5.654h1V21zM2 9.673V3h7.654v1H3v5.673zm19 0V4h-6.654V3H22v6.673z");
}
</style><path class="xis5lhb-g"/>`,
		"fallback": "material-symbols-light:pageless-outline-sharp",
	});
}

export default Component;
