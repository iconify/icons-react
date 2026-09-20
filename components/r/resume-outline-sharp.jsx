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
		"content": `<style>.rf2ees6og {
  fill: currentColor;
  d: path("M7.23 16.616V7.385h1v9.23zm3.386 0L18.327 12l-7.712-4.615zm1-1.814V9.198L16.298 12zm0-2.802");
}
</style><path class="rf2ees6og"/>`,
		"fallback": "material-symbols-light:resume-outline-sharp",
	});
}

export default Component;
