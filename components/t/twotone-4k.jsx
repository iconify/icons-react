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
		"content": `<style>.th8bdf-uf {
  fill: currentColor;
  d: path("M19 5H5v14h14zm-7 8.51h-1V15H9.5v-1.5h-3V9H8v3h1.5V9H11v3h1zM18.2 15h-1.7l-2-3v3H13V9h1.5v3l2-3h1.7l-2 3z");
  opacity: var(--svg-opacity--0-3, 0.3);
}

.xe5i0erme {
  fill: currentColor;
  d: path("M5 21h14c1.1 0 2-.9 2-2V5a2 2 0 0 0-2-2H5c-1.1 0-2 .9-2 2v14a2 2 0 0 0 2 2M5 5h14v14H5zm6 4H9.5v3H8V9H6.5v4.5h3V15H11v-1.49h1V12h-1zm5.5 0l-2 3l2 3h1.7l-2-3l2-3zM13 9v6h1.5V9z");
}
</style><path class="th8bdf-uf"/><path class="xe5i0erme"/>`,
		"fallback": "ic:twotone-4k",
	});
}

export default Component;
