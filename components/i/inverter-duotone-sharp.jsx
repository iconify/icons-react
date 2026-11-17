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

.t6mud7fht {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M4 3h16v18H4Z");
}

.zjyrmobca {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M4 3h16v18H4Zm5 14h6m-7-6V7h8v4a5 5 0 0 1-8 0");
}
</style><g class="ft5dv1b6b"><path class="t6mud7fht"/><path class="zjyrmobca"/></g>`,
		"fallback": "coolicons:inverter-duotone-sharp",
	});
}

export default Component;
