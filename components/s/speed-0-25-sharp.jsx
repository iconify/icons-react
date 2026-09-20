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
		"content": `<style>.wv13hjb3x {
  fill: currentColor;
  d: path("M4 17v-2h2v2zm10 0v-2h4v-2h-4V7h6v2h-4v2h4v6zm-7 0v-6h4V9H7V7h6v6H9v2h4v2z");
}
</style><path class="wv13hjb3x"/>`,
		"fallback": "material-symbols:speed-0-25-sharp",
	});
}

export default Component;
