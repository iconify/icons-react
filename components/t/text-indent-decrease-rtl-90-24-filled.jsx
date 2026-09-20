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
		"content": `<style>.ea8j5f56r {
  fill: currentColor;
  d: path("M17 5.5a1 1 0 0 0-1 1V15l.007.117A1 1 0 0 0 18 15V6.5l-.007-.117A1 1 0 0 0 17 5.5m-6.001-2L11 15l.007.117A1 1 0 0 0 13 15l-.001-11.5l-.007-.117A1 1 0 0 0 11 3.5m-4 2a1 1 0 0 0-1 1V15l.007.117A1 1 0 0 0 8 15V6.5l-.007-.117A1 1 0 0 0 7 5.5m2.21 14.113a1 1 0 0 1 1.497-1.32L12 19.586l1.293-1.293l.094-.083a1 1 0 0 1 1.32 1.497l-2 2l-.094.083a1 1 0 0 1-1.32-.083l-2-2z");
}
</style><path class="ea8j5f56r"/>`,
		"fallback": "fluent:text-indent-decrease-rtl-90-24-filled",
	});
}

export default Component;
