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
		"content": `<style>.boahusrdw {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M4 11h16a5 5 0 0 1-5 5h-1l2 5H8l2-5H9a5 5 0 0 1-5-5m2 0V3h12v8");
}

.ft5dv1b6b {
  fill: none;
}

.ux1acnr6a {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M6 11V3h12v8h2a5 5 0 0 1-5 5h-1l2 5H8l2-5H9a5 5 0 0 1-5-5Z");
}
</style><g class="ft5dv1b6b"><path class="ux1acnr6a"/><path class="boahusrdw"/></g>`,
		"fallback": "coolicons:toilet-alt-duotone-sharp",
	});
}

export default Component;
