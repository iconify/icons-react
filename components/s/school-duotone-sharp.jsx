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

.yeznapb6w {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("m6 6l6-3l6 3v5l3 2v8H3v-8l3-2Z");
}

.z0kf523ar {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("m4 7l8-4l8 4M6 6v5l-3 2v8h18v-8l-3-2V6m-8 4a2 2 0 1 0 4 0a2 2 0 0 0-4 0m0 11v-3a2 2 0 1 1 4 0v3");
}
</style><g class="ft5dv1b6b"><path class="yeznapb6w"/><path class="z0kf523ar"/></g>`,
		"fallback": "coolicons:school-duotone-sharp",
	});
}

export default Component;
