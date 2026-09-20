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
		"content": `<style>.j741tyjok {
  fill: currentColor;
  d: path("M6 15.5h3.385l.673-.673V9.173L9.385 8.5H6zm-1 1v-9h4.846l1.212 1.212v6.577L9.846 16.5zm10.779 0l-3.067-9h1l2.644 7.642L19 7.5h1l-3.067 9z");
}
</style><path class="j741tyjok"/>`,
		"fallback": "material-symbols-light:language-us-dvorak-sharp",
	});
}

export default Component;
