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
		"content": `<style>.n9ur-uywv {
  fill: currentColor;
  d: path("m12 23l-4-4h8zm-8-6q-.825 0-1.412-.587T2 15V5q0-.825.588-1.412T4 3h16q.825 0 1.413.588T22 5v10q0 .825-.587 1.413T20 17zm4-3h8v-2H8zm-3-3h2V9H5zm3 0h2V9H8zm3 0h2V9h-2zm3 0h2V9h-2zm3 0h2V9h-2zM5 8h2V6H5zm3 0h2V6H8zm3 0h2V6h-2zm3 0h2V6h-2zm3 0h2V6h-2z");
}
</style><path class="n9ur-uywv"/>`,
		"fallback": "material-symbols:keyboard-hide",
	});
}

export default Component;
