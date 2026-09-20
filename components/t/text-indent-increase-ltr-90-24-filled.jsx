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
		"content": `<style>.zmgr5ibqt {
  fill: currentColor;
  d: path("M8 9v8.5a1 1 0 0 1-1.993.117L6 17.5V9a1 1 0 0 1 1.993-.117zm6.707-6.707a1 1 0 0 1 .083 1.32l-.083.094l-2 2a1 1 0 0 1-1.32.083l-.094-.083l-2-2a1 1 0 0 1 1.32-1.497l.094.083L12 3.586l1.293-1.293a1 1 0 0 1 1.414 0M13 9l.001 11.5a1 1 0 0 1-1.993.117L11 20.5V9a1 1 0 0 1 1.993-.117zm5 0v8.5a1 1 0 0 1-1.993.117L16 17.5V9a1 1 0 0 1 1.993-.117z");
}
</style><path class="zmgr5ibqt"/>`,
		"fallback": "fluent:text-indent-increase-ltr-90-24-filled",
	});
}

export default Component;
