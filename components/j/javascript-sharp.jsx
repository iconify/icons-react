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
		"content": `<style>.h112n5b1z {
  fill: currentColor;
  d: path("M6 15v-2.5h1.5v1H9V9h1.5v6zm6 0v-2h1.5v.5h2v-1H12V9h5v2h-1.5v-.5h-2v1H17V15z");
}
</style><path class="h112n5b1z"/>`,
		"fallback": "material-symbols:javascript-sharp",
	});
}

export default Component;
