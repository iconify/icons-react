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
		"content": `<style>.s7_2ho15s {
  fill: currentColor;
  d: path("M7 18.5a1 1 0 0 0 1-1V9l-.007-.117A1 1 0 0 0 6 9v8.5l.007.117A1 1 0 0 0 7 18.5m6.001 2L13 9l-.007-.117A1 1 0 0 0 11 9l.001 11.5l.007.117A1 1 0 0 0 13 20.5m3.999-2a1 1 0 0 0 1-1V9l-.007-.117A1 1 0 0 0 16 9v8.5l.007.117A1 1 0 0 0 17 18.5M14.79 4.387a1 1 0 0 1-1.497 1.32L12 4.414l-1.293 1.293l-.094.083a1 1 0 0 1-1.32-1.497l2-2l.094-.083a1 1 0 0 1 1.32.083l2 2z");
}
</style><path class="s7_2ho15s"/>`,
		"fallback": "fluent:text-indent-decrease-rtl-rotate-270-24-filled",
	});
}

export default Component;
