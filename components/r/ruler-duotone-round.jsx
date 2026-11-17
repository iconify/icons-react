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

.qc-zzbbdr {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("m9 9l4-4a2.83 2.83 0 0 1 4 0l2 2a2.83 2.83 0 0 1 0 4l-8 8a2.83 2.83 0 0 1-4 0l-2-2a2.83 2.83 0 0 1 0-4zm-4 4l2 2m2-6l2 2m2-6l2 2");
}

.wecae785u {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M13 5a2.83 2.83 0 0 1 4 0l2 2a2.83 2.83 0 0 1 0 4l-8 8a2.83 2.83 0 0 1-4 0l-2-2a2.83 2.83 0 0 1 0-4Z");
}
</style><g class="ft5dv1b6b"><path class="wecae785u"/><path class="qc-zzbbdr"/></g>`,
		"fallback": "coolicons:ruler-duotone-round",
	});
}

export default Component;
