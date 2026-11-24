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
		"content": `<style>.k1u2hlehk {
  fill: currentColor;
  d: path("M15.293 8.707L13 6.414V16a1 1 0 0 1-2 0V6.414L8.707 8.707a.999.999 0 1 1-1.414-1.414l4-4a1 1 0 0 1 1.414 0l4 4a.999.999 0 1 1-1.414 1.414M8 19h8a3 3 0 0 0 3-3a1 1 0 0 1 2 0a5 5 0 0 1-1.464 3.536A4.98 4.98 0 0 1 16 21H8a4.98 4.98 0 0 1-3.536-1.464A5 5 0 0 1 3 16a1 1 0 0 1 2 0a3 3 0 0 0 3 3");
}
</style><path class="k1u2hlehk"/>`,
		"fallback": "coolicons:upload-fill-round",
	});
}

export default Component;
