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
		"content": `<style>.e1a9qg5xt {
  fill: currentColor;
  d: path("M1.77 18V6h12v12zM17 18V6h1v12zm4.23 0V6h1v12z");
}
</style><path class="e1a9qg5xt"/>`,
		"fallback": "material-symbols-light:overview-key-sharp",
	});
}

export default Component;
