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
		"content": `<style>.xxa801b5r {
  fill: currentColor;
  d: path("M2.146 2.147a.5.5 0 0 1 .708 0l15 15a.5.5 0 0 1-.707.707L13.293 14H5.47a2.5 2.5 0 0 1-2.436-1.934l-.698-3A2.5 2.5 0 0 1 4.77 6h.522L2.146 2.854a.5.5 0 0 1 0-.707M15.232 6a2.5 2.5 0 0 1 2.434 3.068l-.7 3a2.5 2.5 0 0 1-1.183 1.593l-.749-.749a1.5 1.5 0 0 0 .958-1.071l.7-3A1.5 1.5 0 0 0 15.232 7h-6.11l-1-1zM4.772 7A1.5 1.5 0 0 0 3.31 8.84l.698 3A1.5 1.5 0 0 0 5.469 13h6.824L8.468 9.175A.498.498 0 0 1 7.502 9a.5.5 0 0 1 .323-.468L6.293 7zm2.23 3.5a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1m2 0a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1m-3-2a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1m6 0a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1m2 0a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1");
}
</style><path class="xxa801b5r"/>`,
		"fallback": "fluent:serial-port-off-20-regular",
	});
}

export default Component;
