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
		"content": `<style>.tfj-mgb7p {
  fill: currentColor;
  d: path("M122.5 124.88a4 4 0 0 1 0 6.24l-40 32a4 4 0 0 1-5-6.24L113.6 128L77.5 99.12a4 4 0 0 1 5-6.24ZM176 156h-40a4 4 0 0 0 0 8h40a4 4 0 0 0 0-8m52-100v144a12 12 0 0 1-12 12H40a12 12 0 0 1-12-12V56a12 12 0 0 1 12-12h176a12 12 0 0 1 12 12m-8 0a4 4 0 0 0-4-4H40a4 4 0 0 0-4 4v144a4 4 0 0 0 4 4h176a4 4 0 0 0 4-4Z");
}
</style><path class="tfj-mgb7p"/>`,
		"fallback": "ph:terminal-window-thin",
	});
}

export default Component;
