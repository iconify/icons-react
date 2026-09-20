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
		"content": `<style>.kyf3vgbsy {
  fill: currentColor;
  d: path("M8 7h7.5A1.5 1.5 0 0 0 17 5.5v-1A1.5 1.5 0 0 0 15.5 3H8zM7 3H4.5A1.5 1.5 0 0 0 3 4.5v1A1.5 1.5 0 0 0 4.5 7H7zm3 9h5.5a1.5 1.5 0 0 0 1.5-1.5v-1A1.5 1.5 0 0 0 15.5 8H10zM9 8H6.5A1.5 1.5 0 0 0 5 9.5v1A1.5 1.5 0 0 0 6.5 12H9zm6.5 9H12v-4h3.5a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1-1.5 1.5m-7-4H11v4H8.5A1.5 1.5 0 0 1 7 15.5v-1A1.5 1.5 0 0 1 8.5 13");
}
</style><path class="kyf3vgbsy"/>`,
		"fallback": "fluent:list-bar-tree-offset-20-filled",
	});
}

export default Component;
