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
		"content": `<style>.m0k5q8nkc {
  fill: currentColor;
  d: path("M6.616 16.808h8v-2h-8zM4 20V4h16v16z");
}
</style><path class="m0k5q8nkc"/>`,
		"fallback": "material-symbols-light:position-bottom-left-sharp",
	});
}

export default Component;
