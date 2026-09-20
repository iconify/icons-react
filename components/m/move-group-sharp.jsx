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
		"content": `<style>.f_0h8cbmq {
  fill: currentColor;
  d: path("M6 18v-4h2v2h12V6H8v2H6V2h16v16zm-4 4V6h2v14h14v2zm11-7l-1.4-1.4l1.575-1.6H6v-2h7.175L11.6 8.4L13 7l4 4z");
}
</style><path class="f_0h8cbmq"/>`,
		"fallback": "material-symbols:move-group-sharp",
	});
}

export default Component;
