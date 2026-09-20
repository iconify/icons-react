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
		"content": `<style>.fenz21hyb {
  fill: currentColor;
  d: path("M5.5 18V6h2v12zm13 0l-9-6l9-6zm-2-3.75v-4.5L13.1 12z");
}
</style><path class="fenz21hyb"/>`,
		"fallback": "material-symbols:skip-previous-outline-sharp",
	});
}

export default Component;
