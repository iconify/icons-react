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
		"content": `<style>.lhi3rlo9u {
  fill: currentColor;
  d: path("M7 3v6h1a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2h1V3a1 1 0 0 1 2 0m7 12a1 1 0 0 1 0 2h-4a1 1 0 0 1 0-2h1V3a1 1 0 0 1 2 0v12Zm5-12v3h1a1 1 0 0 1 0 2h-4a1 1 0 0 1 0-2h1V3a1 1 0 0 1 2 0m0 18a1 1 0 0 1-2 0V11a1 1 0 0 1 2 0ZM7 14v7a1 1 0 0 1-2 0v-7a1 1 0 0 1 2 0m6 6v1a1 1 0 0 1-2 0v-1a1 1 0 0 1 2 0");
}
</style><path class="lhi3rlo9u"/>`,
		"fallback": "coolicons:slider-vertical-3-fill",
	});
}

export default Component;
