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

.hu3s5tbxd {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("m4 8l2-4h12l2 4Zm13 13c-2-2-4-4-4-5a4 4 0 0 1 8 0c0 1-2 3-4 5");
}

.o89ayfb1z {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M4 8v12h4M4 8l2-4h12l2 4M4 8h16m-3 8h.01M17 21c-2-2-4-4-4-5a4 4 0 1 1 8 0c0 1-2 3-4 5");
}
</style><g class="ft5dv1b6b"><path class="hu3s5tbxd"/><path class="o89ayfb1z"/></g>`,
		"fallback": "coolicons:package-tracking-corner-duotone-sharp",
	});
}

export default Component;
