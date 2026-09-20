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
		"content": `<style>.cmztncrbf {
  fill: currentColor;
  d: path("M4.625 5.332a6 6 0 0 0 8.044 8.044l.74.74A6.97 6.97 0 0 1 10 15a6.97 6.97 0 0 1-4-1.255V17.5a.5.5 0 0 0 .79.407L10 16l3.21 1.907A.5.5 0 0 0 14 17.5v-2.793l3.146 3.147a.5.5 0 0 0 .708-.708l-15-15a.5.5 0 1 0-.708.708zm1.193-1.635l8.485 8.485a6 6 0 0 0-8.484-8.484");
}
</style><path class="cmztncrbf"/>`,
		"fallback": "fluent:ribbon-off-20-filled",
	});
}

export default Component;
