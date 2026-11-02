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

.nnt_hjbtk {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 21h18M5 21V10l6-3h2l6 3v11M9 21v-8h6v8m-6-4h6");
}

.s7_fequ6g {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M4 10c0-.379.214-.725.553-.894l6-3A1 1 0 0 1 11 6h2c.155 0 .308.036.447.106l6 3A1 1 0 0 1 20 10v11a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1Z");
}
</style><g class="ft5dv1b6b"><path class="s7_fequ6g"/><path class="nnt_hjbtk"/></g>`,
		"fallback": "coolicons:warehouse-duotone-sharp",
	});
}

export default Component;
