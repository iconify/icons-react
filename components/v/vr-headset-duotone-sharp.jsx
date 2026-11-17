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

.iu_v63m5n {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M3 10c.002-3.155 2.225-3.999 5-4h8c2.775.001 4.998.845 5 4v3c0 3-2 5-4 5s-3-3-5-3s-3 3-5 3s-4-2-4-5Z");
}

.rzm8iaclc {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 10c0-3 2-4 5-4h8c3 0 5 1 5 4v3c0 3-2 5-4 5s-3-3-5-3s-3 3-5 3s-4-2-4-5Z");
}
</style><g class="ft5dv1b6b"><path class="iu_v63m5n"/><path class="rzm8iaclc"/></g>`,
		"fallback": "coolicons:vr-headset-duotone-sharp",
	});
}

export default Component;
