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
		"content": `<style>.fold3jzin {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 8h-2a2 2 0 1 1 2-2Zm4 4v-2a2 2 0 1 1 2 2Zm-4 4h2a2 2 0 1 1-2 2Zm-4-4v2a2 2 0 1 1-2-2Zm8-2V6a2 2 0 1 0-4 0m0 2v8m0 2a2 2 0 1 1-4 0v-4m2-6H6a2 2 0 1 0 0 4m2 0h8m2 0a2 2 0 1 1 0 4h-4");
}
</style><path class="fold3jzin"/>`,
		"fallback": "coolicons:slack-round",
	});
}

export default Component;
