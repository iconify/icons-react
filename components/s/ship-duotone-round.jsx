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

.lmnkv_3ft {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("m4 17l-1-3l9-3l9 3l-1 3M6 13V9a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v4M12 3v3m0 5v6M2 20c.5.5 1 1 2 1c2 0 2-2 4-2s2 2 4 2s2-2 4-2s2 2 4 2c1 0 1.5-.5 2-1");
}

.qqp-y8p-g {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M5 9a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v4a1.002 1.002 0 0 1-1.316.949L12 12.054l-5.684 1.895A1.002 1.002 0 0 1 5 13Z");
}
</style><g class="ft5dv1b6b"><path class="qqp-y8p-g"/><path class="lmnkv_3ft"/></g>`,
		"fallback": "coolicons:ship-duotone-round",
	});
}

export default Component;
