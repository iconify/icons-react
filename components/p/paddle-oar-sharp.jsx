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
		"content": `<style>.xqgr7dbqx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.75 3.75L14.5 14.5m-.47.47l.94-.94l.53-.53l.59.46l4.32 3.33l.59.46l.06.75l.13 1.75l.06.75l-.75.05l-2 .15l-.75.05l-.45-.6l-3.35-4.55l-.45-.6zm6.22-11.22L9.5 14.5m.47.47l-.94-.94l-.53-.53l-.59.46l-4.32 3.33l-.59.46l-.06.75l-.13 1.75l-.06.75l.75.05l2 .15l.75.05l.45-.6l3.35-4.55l.45-.6z");
}
</style><path class="xqgr7dbqx"/>`,
		"fallback": "iconoven:paddle-oar-sharp",
	});
}

export default Component;
