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
		"content": `<style>.d6tpxqbcu {
  fill: currentColor;
  d: path("M17.985 13L4.846 8.246l.316-.938L20 12.708V19H4v-6zm-7.831 3.5H17.5v-1h-7.346zm-3.923.27h1.538v-1.54H6.231z");
}
</style><path class="d6tpxqbcu"/>`,
		"fallback": "material-symbols-light:scanner-sharp",
	});
}

export default Component;
