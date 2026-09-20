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
		"content": `<style>.dpw0pqbzm {
  fill: currentColor;
  d: path("M3 21V3h18v18zm2-2h14v-7H5zm7-11h6V6h-6z");
}
</style><path class="dpw0pqbzm"/>`,
		"fallback": "material-symbols:tabs-sharp",
	});
}

export default Component;
