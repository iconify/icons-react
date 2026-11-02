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
		"content": `<style>.ceot8m8vk {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("m12 2l10 18H2Z");
}

.ft5dv1b6b {
  fill: none;
}

.mivao-bde {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("m12 2l10 18H2Zm-2 10a2 2 0 1 1 2 2m0 3h.01");
}
</style><g class="ft5dv1b6b"><path class="ceot8m8vk"/><path class="mivao-bde"/></g>`,
		"fallback": "coolicons:triangle-help-duotone-sharp",
	});
}

export default Component;
