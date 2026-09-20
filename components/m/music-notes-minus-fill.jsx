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
		"content": `<style>.c8_sarber {
  fill: currentColor;
  d: path("M224 40h-48a8 8 0 0 0 0 16h48a8 8 0 0 0 0-16m-61.87 36.5a31.57 31.57 0 0 1-16.44-38.76a4 4 0 0 0-4.69-5.21L78.06 48.25A8 8 0 0 0 72 56v110.1A36 36 0 1 0 52.42 232C72.25 231.77 88 215.13 88 195.3v-93.05l73.26-18.31a4 4 0 0 0 .87-7.44M212 80h-8a4 4 0 0 0-4 4v50.1a36 36 0 1 0-19.58 65.9c19.83-.23 35.58-16.86 35.58-36.7V84a4 4 0 0 0-4-4");
}
</style><path class="c8_sarber"/>`,
		"fallback": "ph:music-notes-minus-fill",
	});
}

export default Component;
