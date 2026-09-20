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
		"content": `<style>.jpzgwbykl {
  fill: currentColor;
  d: path("M19.5 14q-.698 0-1.237-.425t-.698-1.075H2.5v-1h15.066q.159-.65.698-1.075T19.5 10q.839 0 1.42.58T21.5 12t-.58 1.42t-1.42.58");
}
</style><path class="jpzgwbykl"/>`,
		"fallback": "material-symbols-light:line-end-outline",
	});
}

export default Component;
