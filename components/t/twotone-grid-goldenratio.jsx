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
		"content": `<style>.ovprq8cwv {
  fill: currentColor;
  d: path("M22 11V9h-7V2h-2v7h-2V2H9v7H2v2h7v2H2v2h7v7h2v-7h2v7h2v-7h7v-2h-7v-2zm-9 2h-2v-2h2z");
}
</style><path class="ovprq8cwv"/>`,
		"fallback": "ic:twotone-grid-goldenratio",
	});
}

export default Component;
