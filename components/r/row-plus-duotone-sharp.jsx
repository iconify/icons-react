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
		"content": `<style>.e9qubpbsd {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M4 4h16v6H4Z");
}

.ft5dv1b6b {
  fill: none;
}

.w720hhmwi {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M4 4h16v6H4Zm5 13h6m-3-3v6");
}
</style><g class="ft5dv1b6b"><path class="e9qubpbsd"/><path class="w720hhmwi"/></g>`,
		"fallback": "coolicons:row-plus-duotone-sharp",
	});
}

export default Component;
