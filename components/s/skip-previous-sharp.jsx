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
		"content": `<style>.h180h9bdr {
  fill: currentColor;
  d: path("M6.73 16.616V7.385h1v9.23zm10.54 0L10.345 12l6.923-4.615z");
}
</style><path class="h180h9bdr"/>`,
		"fallback": "material-symbols-light:skip-previous-sharp",
	});
}

export default Component;
