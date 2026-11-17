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

.hsw_-dbyo {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 9h3a4 4 0 0 1 4 4v5a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-5a4 4 0 0 1 4-4zm-7 5h14M3 4h18M9 4v5m6-5v5m-6 8h.01M15 17h.01");
}

.vs4cf0b0u {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M15 9a4 4 0 0 1 4 4v5a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-5a4 4 0 0 1 4-4Z");
}
</style><g class="ft5dv1b6b"><path class="vs4cf0b0u"/><path class="hsw_-dbyo"/></g>`,
		"fallback": "coolicons:suspension-railway-front-duotone-round",
	});
}

export default Component;
