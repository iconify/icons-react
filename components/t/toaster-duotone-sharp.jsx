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

.gjjesibqj {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 9h18v12H3Zm14 4v4M6 9V5a2 2 0 1 1 4 0v4m4 0V5a2 2 0 1 1 4 0v4");
}

.scsz8lb9s {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M3 9h18v12H3Z");
}
</style><g class="ft5dv1b6b"><path class="scsz8lb9s"/><path class="gjjesibqj"/></g>`,
		"fallback": "coolicons:toaster-duotone-sharp",
	});
}

export default Component;
