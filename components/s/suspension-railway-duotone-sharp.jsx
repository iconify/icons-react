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
		"content": `<style>.ewylibb5k {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 20V9h14l4 4v7zm0-4h18M11 9v7M3 4h18M7 4v5m8-5v5");
}

.ft5dv1b6b {
  fill: none;
}

.ue8xubbqq {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M3 9h14l4 4v7H3Z");
}
</style><g class="ft5dv1b6b"><path class="ue8xubbqq"/><path class="ewylibb5k"/></g>`,
		"fallback": "coolicons:suspension-railway-duotone-sharp",
	});
}

export default Component;
