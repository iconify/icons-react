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
		"content": `<style>.ft5dv1b6b {
  fill: none;
}

.l8h-8bc8x {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M3 21v-9a9 9 0 0 1 9-9a9 9 0 0 1 9 9v9h-4v-9a5 5 0 0 0-10 0v9Z");
}

.sbtuu5ztt {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 19v-7a9 9 0 0 1 18 0v9h-4v-9a5 5 0 0 0-10 0v9H3zM8 8L6 6m6-3v4m4 1l2-2M3 11h4m10 0h4M3 16h4m10 0h4");
}
</style><g class="ft5dv1b6b"><path class="l8h-8bc8x"/><path class="sbtuu5ztt"/></g>`,
		"fallback": "coolicons:tunnel-duotone-sharp",
	});
}

export default Component;
