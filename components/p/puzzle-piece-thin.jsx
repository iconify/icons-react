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
		"content": `<style>.of7p77bwf {
  fill: currentColor;
  d: path("M218.14 161.93a4 4 0 0 0-3.86-.24a24 24 0 0 1-34.23-23.25a24 24 0 0 1 34.23-20.13a4 4 0 0 0 5.72-3.61V72a12 12 0 0 0-12-12h-41a32 32 0 1 0-62.91-10.33A32.6 32.6 0 0 0 105 60H64a12 12 0 0 0-12 12v37a32 32 0 1 0-10.33 62.91A32.3 32.3 0 0 0 52 171v37a12 12 0 0 0 12 12h144a12 12 0 0 0 12-12v-42.69a4 4 0 0 0-1.86-3.38M212 208a4 4 0 0 1-4 4H64a4 4 0 0 1-4-4v-42.69a4 4 0 0 0-1.86-3.38a4 4 0 0 0-3.85-.24a24 24 0 0 1-34.24-20.13a24 24 0 0 1 34.24-23.25A4 4 0 0 0 60 114.7V72a4 4 0 0 1 4-4h46.69a4 4 0 0 0 3.62-5.71a24 24 0 0 1 20.13-34.24a24 24 0 0 1 23.25 34.24a4 4 0 0 0 3.62 5.71H208a4 4 0 0 1 4 4v37a32.6 32.6 0 0 0-10.33-.94A32 32 0 1 0 212 171Z");
}
</style><path class="of7p77bwf"/>`,
		"fallback": "ph:puzzle-piece-thin",
	});
}

export default Component;
