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
		"content": `<style>.augw3-b9y {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M9 3h6l4 8H5ZM8 17h8v4H8Z");
}

.ft5dv1b6b {
  fill: none;
}

.xjp78kbaj {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M9 3h6l4 8H5zm3 8v6m-4 0h8v4H8Z");
}
</style><g class="ft5dv1b6b"><path class="augw3-b9y"/><path class="xjp78kbaj"/></g>`,
		"fallback": "coolicons:lamp-duotone-sharp",
	});
}

export default Component;
