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
		"content": `<style>.oxt89abcn {
  fill: currentColor;
  d: path("M4 15v-2h10v2zm0-4V9h16v2z");
}
</style><path class="oxt89abcn"/>`,
		"fallback": "material-symbols:short-text-outline-sharp",
	});
}

export default Component;
