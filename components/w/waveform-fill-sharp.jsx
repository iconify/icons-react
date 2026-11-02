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
		"content": `<style>.h9bdq4btr {
  fill: currentColor;
  d: path("M13 21a1 1 0 0 1-2 0V3a1 1 0 0 1 2 0Zm-4-3a1 1 0 0 1-2 0V6a1 1 0 0 1 2 0Zm8-1a1 1 0 0 1-2 0V7a1 1 0 0 1 2 0ZM5 14a1 1 0 0 1-2 0v-4a1 1 0 0 1 2 0Zm16 0a1 1 0 0 1-2 0v-4a1 1 0 0 1 2 0Z");
}
</style><path class="h9bdq4btr"/>`,
		"fallback": "coolicons:waveform-fill-sharp",
	});
}

export default Component;
