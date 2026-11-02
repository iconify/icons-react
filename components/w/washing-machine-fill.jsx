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
		"content": `<style>.dc3ewu0pp {
  fill: currentColor;
  d: path("M6 2h12a3 3 0 0 1 3 3v3H3V5a3 3 0 0 1 3-3m2 3a1 1 0 0 0 0 2h.01a1 1 0 0 0 0-2Zm3.01 0H11a1 1 0 0 0 0 2h.01a1 1 0 0 0 0-2M21 10v9a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-9ZM8 15a4 4 0 1 0 8 0a4 4 0 0 0-8 0m2 0a2 2 0 1 1 3.999-.001A2 2 0 0 1 10 15");
}
</style><path class="dc3ewu0pp"/>`,
		"fallback": "coolicons:washing-machine-fill",
	});
}

export default Component;
