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
		"content": `<style>.lh_6htbue {
  fill: currentColor;
  d: path("M11 8a1 1 0 0 1-2 0V7H3a1 1 0 0 1 0-2h6V4a1 1 0 0 1 2 0Zm3-3h7a1 1 0 0 1 0 2h-7a1 1 0 0 1 0-2m3 9a1 1 0 0 1-2 0v-1H3a1 1 0 0 1 0-2h12v-1a1 1 0 0 1 2 0Zm3-3h1a1 1 0 0 1 0 2h-1a1 1 0 0 1 0-2M8 20a1 1 0 0 1-2 0v-1H3a1 1 0 0 1 0-2h3v-1a1 1 0 0 1 2 0Zm13-3a1 1 0 0 1 0 2H11a1 1 0 0 1 0-2Z");
}
</style><path class="lh_6htbue"/>`,
		"fallback": "coolicons:slider-3-fill-round",
	});
}

export default Component;
