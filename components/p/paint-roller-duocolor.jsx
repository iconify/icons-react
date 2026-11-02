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
		"content": `<style>.hgwa-psdk {
  d: path("M3 5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z");
}

.m8xnl4bcc {
  stroke-opacity: 0.4;
  d: path("M17 6h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-5a2 2 0 0 0-2 2v1m-2 1a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1Z");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="m8xnl4bcc"/><path class="hgwa-psdk"/></g>`,
		"fallback": "coolicons:paint-roller-duocolor",
	});
}

export default Component;
