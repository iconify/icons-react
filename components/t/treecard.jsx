import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.ts-u-sb9y {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 4.5v39M11.23 10.19C11.23 20.94 24 17.62 24 27.7m12.77-9.07C36.77 29.38 24 26.06 24 36.14M15.94 8.89c-.33 0-.65.04-.96.11c-.07.31-.11.63-.11.96c0 2.44 1.98 4.42 4.42 4.42c.33 0 .65-.04.96-.11c.07-.31.11-.63.11-.96c0-2.44-1.98-4.42-4.42-4.42m16.12 4.57c.33 0 .65.04.96.11c.07.31.11.63.11.96c0 2.44-1.98 4.42-4.42 4.42c-.33 0-.65-.04-.96-.11c-.07-.31-.11-.63-.11-.96c0-2.44 1.98-4.42 4.42-4.42M15.94 25.29c-.33 0-.65.04-.96.11c-.07.31-.11.63-.11.96c0 2.44 1.98 4.42 4.42 4.42c.33 0 .65-.04.96-.11c.07-.31.11-.63.11-.96c0-2.44-1.98-4.42-4.42-4.42");
}

.vuh_xv8ii {
  width: 25.54px;
  height: 32.36px;
  x: 11.23px;
  y: 4.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 4.05px;
  ry: 4.05px;
}
</style><rect class="vuh_xv8ii"/><path class="ts-u-sb9y"/>`,
		"fallback": "arcticons:treecard",
	});
}

export default Component;
