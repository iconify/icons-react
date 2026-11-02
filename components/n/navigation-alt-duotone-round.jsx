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

.rr9o28jjf {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("m15 12l2 6c.369 1.107-.262 2.369-1 2l-2-1a4.47 4.47 0 0 0-4 0l-2 1c-.738.369-1.369-.893-1-2l4-12c.32-.961 1.68-.961 2 0z");
}

.sbg04hbap {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M17 18c.369 1.107-.262 2.369-1 2l-2-1a4.47 4.47 0 0 0-4 0l-2 1c-.738.369-1.369-.893-1-2l4-12a1.054 1.054 0 0 1 2 0Z");
}
</style><g class="ft5dv1b6b"><path class="sbg04hbap"/><path class="rr9o28jjf"/></g>`,
		"fallback": "coolicons:navigation-alt-duotone-round",
	});
}

export default Component;
