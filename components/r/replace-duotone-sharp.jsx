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
		"content": `<style>.f-ts_ybys {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 15h6v6H3ZM15 3h6v6h-6Zm-4 0H6v7M3 7l3 3l3-3");
}

.ft5dv1b6b {
  fill: none;
}

.s1ylnab2z {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M2 21v-6a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1");
}
</style><g class="ft5dv1b6b"><path class="s1ylnab2z"/><path class="f-ts_ybys"/></g>`,
		"fallback": "coolicons:replace-duotone-sharp",
	});
}

export default Component;
