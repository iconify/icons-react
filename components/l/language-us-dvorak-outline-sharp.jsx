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
		"content": `<style>.enuxo7m3r {
  fill: currentColor;
  d: path("M6 15h3.25V9H6zm-2 2V7h6.25l1 1v8l-1 1zm11.625 0L12.25 7h2l2.375 6.95L19 7h2l-3.375 10z");
}
</style><path class="enuxo7m3r"/>`,
		"fallback": "material-symbols:language-us-dvorak-outline-sharp",
	});
}

export default Component;
