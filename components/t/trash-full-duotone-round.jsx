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
		"content": `<style>.aurq8ebdj {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M6 6v11a4 4 0 0 0 4 4h4a4 4 0 0 0 4-4V6M4 6h16M8 6a3 3 0 0 1 3-3h2a3 3 0 0 1 3 3m-6 4v7m4-7v7");
}

.ft5dv1b6b {
  fill: none;
}

.lxdj-cbtl {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M6 6h12v11a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4Zm3 4v7a1 1 0 0 0 2 0v-7a1 1 0 0 0-2 0m4 0v7a1 1 0 0 0 2 0v-7a1 1 0 0 0-2 0");
}
</style><g class="ft5dv1b6b"><path class="lxdj-cbtl"/><path class="aurq8ebdj"/></g>`,
		"fallback": "coolicons:trash-full-duotone-round",
	});
}

export default Component;
