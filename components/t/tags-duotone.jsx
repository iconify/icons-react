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

.infptgbgb {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M8 6c.763 0 1.479.48 2 1l4 4a1.415 1.415 0 0 1 0 2l-4 4a1.415 1.415 0 0 1-2 0l-4-4c-.52-.521-1-1.237-1-2V8a2 2 0 0 1 2-2Z");
}

.us5vywibh {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M6 6h2c.64 0 1.36.36 2 1l4 4a1.414 1.414 0 0 1 0 2l-4 4a1.414 1.414 0 0 1-2 0l-4-4c-.64-.64-1-1.36-1-2V8a2 2 0 0 1 2-2zm1 4h.01M15 6l5 5a1.414 1.414 0 0 1 0 2l-5 5");
}
</style><g class="ft5dv1b6b"><path class="infptgbgb"/><path class="us5vywibh"/></g>`,
		"fallback": "coolicons:tags-duotone",
	});
}

export default Component;
