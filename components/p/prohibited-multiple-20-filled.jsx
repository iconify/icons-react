import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.j_dxdcbjk {
  fill: currentColor;
  d: path("M5.11 5.11a5.5 5.5 0 0 1 7.213-.494l-7.707 7.707a5.5 5.5 0 0 1 .495-7.212m.567 8.274l7.707-7.707a5.501 5.501 0 0 1-7.707 7.707M13.95 4.05a7 7 0 1 0-9.9 9.9a7 7 0 0 0 9.9-9.9M17 9a8 8 0 0 1-9.765 7.805a7 7 0 0 0 9.57-9.57Q16.999 8.086 17 9");
}
</style><path class="j_dxdcbjk"/>`,
		"fallback": "fluent:prohibited-multiple-20-filled",
	});
}

export default Component;
