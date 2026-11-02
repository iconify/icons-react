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

.o5oycinfs {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M5 13a7.071 7.071 0 1 1 14-2a7.071 7.071 0 0 1-14 2m0 0c-3.261 2.977-2.339 4.823 2 4c3.87-.734 9.091-3.344 12-6c3.261-2.977 2.339-4.823-2-4");
}

.pva78mrxt {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M4.343 9.448a8.07 8.07 0 0 1 10.209-5.105a8.07 8.07 0 0 1 5.105 10.209a8.07 8.07 0 0 1-10.209 5.105A8.07 8.07 0 0 1 4.343 9.448");
}
</style><g class="ft5dv1b6b"><path class="pva78mrxt"/><path class="o5oycinfs"/></g>`,
		"fallback": "coolicons:planet-duotone-sharp",
	});
}

export default Component;
