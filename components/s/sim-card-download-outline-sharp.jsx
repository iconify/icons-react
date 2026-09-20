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
		"content": `<style>.usof0br8d {
  fill: currentColor;
  d: path("m12 16.116l3.308-3.308l-.708-.708l-2.1 2.05V9.5h-1v4.65L9.4 12.1l-.708.708zM5 21V8.423L10.423 3H19v18zm1-1h12V4h-7.15L6 8.85zm0 0h12z");
}
</style><path class="usof0br8d"/>`,
		"fallback": "material-symbols-light:sim-card-download-outline-sharp",
	});
}

export default Component;
