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

.rxzu-xbub {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 6V5a2 2 0 0 1 2-2h1m12 0h1a2 2 0 0 1 2 2v1M6 21H5a2 2 0 0 1-2-2v-1m7-15h4M3 14v-4m6-1l12 4l-4 1l2 2a1.414 1.414 0 0 1 0 2l-1 1a1.414 1.414 0 0 1-2 0l-2-2l-1 4z");
}

.w0_46yljp {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("m9 9l12 4l-4 1l2 2a1.415 1.415 0 0 1 0 2l-1 1a1.415 1.415 0 0 1-2 0l-2-2l-1 4Z");
}
</style><g class="ft5dv1b6b"><path class="w0_46yljp"/><path class="rxzu-xbub"/></g>`,
		"fallback": "coolicons:square-dashed-cursor-duotone",
	});
}

export default Component;
