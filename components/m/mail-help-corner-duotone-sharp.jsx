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

.utjunsq8z {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M21 11H11v8H3V5h18Z");
}

.uu8rv5but {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M11 19H3V5h18v6M3 5l6 6h6l6-6m-5 11a2 2 0 1 1 2 2m0 3h.01");
}
</style><g class="ft5dv1b6b"><path class="utjunsq8z"/><path class="uu8rv5but"/></g>`,
		"fallback": "coolicons:mail-help-corner-duotone-sharp",
	});
}

export default Component;
