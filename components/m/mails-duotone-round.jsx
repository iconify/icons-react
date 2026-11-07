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

.uuoq3xbtm {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M7 8h6a5 5 0 0 1 5 5v4a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5v-4a5 5 0 0 1 5-5");
}

.wv4b3ccgh {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 13a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v4a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Zm1-2l3 3c.64.64 1.72 1 3 1s2.36-.36 3-1l3-3M7 5a2 2 0 0 1 2-2h8a4 4 0 0 1 4 4v8");
}
</style><g class="ft5dv1b6b"><path class="uuoq3xbtm"/><path class="wv4b3ccgh"/></g>`,
		"fallback": "coolicons:mails-duotone-round",
	});
}

export default Component;
