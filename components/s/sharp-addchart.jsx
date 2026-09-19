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
		"content": `<style>.ea6dtnbga {
  fill: currentColor;
  d: path("M11 9h2v8h-2zm-2 8v-6H7v6zm10 2H5V5h6V3H3v18h18v-8h-2zm-4-6v4h2v-4zm4-8V2h-2v3h-3v2h3v3h2V7h3V5z");
}
</style><path class="ea6dtnbga"/>`,
		"fallback": "ic:sharp-addchart",
	});
}

export default Component;
