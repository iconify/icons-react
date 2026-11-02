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
		"content": `<style>.a9fmp_b2b {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M3 4h6v6H3Z");
}

.ft5dv1b6b {
  fill: none;
}

.hwnynfbiz {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M13 7h8m-8 10h8M3 4h6v6H3Zm0 13l2 2l4-4");
}
</style><g class="ft5dv1b6b"><path class="a9fmp_b2b"/><path class="hwnynfbiz"/></g>`,
		"fallback": "coolicons:list-todo-duotone-sharp",
	});
}

export default Component;
