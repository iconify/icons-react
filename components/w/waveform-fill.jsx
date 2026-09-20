import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.j0w562bll {
  fill: currentColor;
  d: path("M216 40H40a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16M72 152a8 8 0 0 1-16 0v-48a8 8 0 0 1 16 0Zm32 32a8 8 0 0 1-16 0V72a8 8 0 0 1 16 0Zm32-16a8 8 0 0 1-16 0V88a8 8 0 0 1 16 0Zm32-16a8 8 0 0 1-16 0v-48a8 8 0 0 1 16 0Zm32 8a8 8 0 0 1-16 0V96a8 8 0 0 1 16 0Z");
}
</style><path class="j0w562bll"/>`,
		"fallback": "ph:waveform-fill",
	});
}

export default Component;
