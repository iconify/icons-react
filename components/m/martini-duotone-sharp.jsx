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

.qyxb3lmaf {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M12 11L7 6h10Z");
}

.utf47neop {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M4 3h16l-8 8zm8 8v10m-4 0h8M7 6h10");
}
</style><g class="ft5dv1b6b"><path class="qyxb3lmaf"/><path class="utf47neop"/></g>`,
		"fallback": "coolicons:martini-duotone-sharp",
	});
}

export default Component;
