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
		"content": `<style>.kpdqu32go {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 7h3a4 4 0 0 1 4 4v6a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-6a4 4 0 0 1 4-4zM8 19l-1 2m9-2l1 2M5 13h14M9 3h6m-3 0v4m-3 9h.01M15 16h.01");
}
</style><path class="kpdqu32go"/>`,
		"fallback": "coolicons:tram-round",
	});
}

export default Component;
