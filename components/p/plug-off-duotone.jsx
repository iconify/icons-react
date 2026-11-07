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

.h5spufblj {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M6.177 15.823A2 2 0 0 1 6 15V9a2.003 2.003 0 0 1 2-2h7ZM18 10v5a2.003 2.003 0 0 1-2 2h-5Z");
}

.xdo0cdc_m {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M6 16V9a2 2 0 0 1 2-2h7m3 3v5a2 2 0 0 1-2 2h-5m1 0v4M9 3v4m6-4v4M2 20L20 2");
}
</style><g class="ft5dv1b6b"><path class="h5spufblj"/><path class="xdo0cdc_m"/></g>`,
		"fallback": "coolicons:plug-off-duotone",
	});
}

export default Component;
