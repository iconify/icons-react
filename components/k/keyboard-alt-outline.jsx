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
		"content": `<style>.za89l2b9j {
  fill: currentColor;
  d: path("M3 20q-.825 0-1.412-.587T1 18V6q0-.825.588-1.412T3 4h18q.825 0 1.413.588T23 6v12q0 .825-.587 1.413T21 20zm0-2h18V6H3zm5-1h8v-2H8zm-3-3.5h2v-2H5zm4 0h2v-2H9zm4 0h2v-2h-2zm4 0h2v-2h-2zM5 10h2V8H5zm4 0h2V8H9zm4 0h2V8h-2zm4 0h2V8h-2zM3 18V6z");
}
</style><path class="za89l2b9j"/>`,
		"fallback": "material-symbols:keyboard-alt-outline",
	});
}

export default Component;
