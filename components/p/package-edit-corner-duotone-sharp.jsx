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

.heujh0b5s {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M4 8v12h4M4 8l2-4h12l2 4M4 8h16m-7 13v-3l5-5l3 3l-5 5Z");
}

.u5x_79dbp {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M6 4h12l2 4H4Zm7 17v-3l5-5l3 3l-5 5Z");
}
</style><g class="ft5dv1b6b"><path class="u5x_79dbp"/><path class="heujh0b5s"/></g>`,
		"fallback": "coolicons:package-edit-corner-duotone-sharp",
	});
}

export default Component;
