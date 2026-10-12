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
		"content": `<style>.cvqaqx3ph {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.75 3.75L14.5 14.5m-.47.47l.94-.94q.53-.53 1.12-.07l4.32 3.33q.59.46.65 1.21l.13 1.75q.06.75-.69.8l-2 .15q-.75.05-1.2-.55l-3.35-4.55q-.45-.6.08-1.13m6.22-11.22L9.5 14.5m.47.47l-.94-.94q-.53-.53-1.12-.07l-4.32 3.33q-.59.46-.65 1.21l-.13 1.75q-.06.75.69.8l2 .15q.75.05 1.2-.55l3.35-4.55q.45-.6-.08-1.13");
}
</style><path class="cvqaqx3ph"/>`,
		"fallback": "iconoven:paddle-oar",
	});
}

export default Component;
