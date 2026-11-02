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

.k8gwmtivg {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M3 8h18v8H3Z");
}

.o9efq5m-i {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 8h18v8H3Z");
}
</style><g class="ft5dv1b6b"><path class="k8gwmtivg"/><path class="o9efq5m-i"/></g>`,
		"fallback": "coolicons:ratio-21-9-duotone-sharp",
	});
}

export default Component;
