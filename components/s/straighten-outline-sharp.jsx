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
		"content": `<style>.h1hz5jbyj {
  fill: currentColor;
  d: path("M2 18V6h20v12zm2-2h16V8h-3v4h-2V8h-2v4h-2V8H9v4H7V8H4zm3-4h2zm4 0h2zm4 0h2zm-3 0");
}
</style><path class="h1hz5jbyj"/>`,
		"fallback": "material-symbols:straighten-outline-sharp",
	});
}

export default Component;
