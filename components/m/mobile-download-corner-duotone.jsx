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
		"content": `<style>.fg1qs2bov {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 12V5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v5m-3 11H5a2 2 0 0 1-2-2v-7m11 6l3 3l3-3m-3 3v-8");
}

.fszm775fp {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M13 10h-1a2 2 0 0 0-2 2v9H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2Z");
}

.ft5dv1b6b {
  fill: none;
}
</style><g class="ft5dv1b6b"><path class="fszm775fp"/><path class="fg1qs2bov"/></g>`,
		"fallback": "coolicons:mobile-download-corner-duotone",
	});
}

export default Component;
