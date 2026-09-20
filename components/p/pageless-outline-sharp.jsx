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
		"content": `<style>.wzc-1ofzr {
  fill: currentColor;
  d: path("M1 22v-8h2v6h7v2zm13 0v-2h7v-6h2v8zM1 10V2h9v2H3v6zm20 0V4h-7V2h9v8z");
}
</style><path class="wzc-1ofzr"/>`,
		"fallback": "material-symbols:pageless-outline-sharp",
	});
}

export default Component;
