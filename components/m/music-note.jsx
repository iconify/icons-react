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
		"content": `<style>.qq9h6npso {
  fill: currentColor;
  d: path("m210.3 56.34l-80-24A8 8 0 0 0 120 40v108.26A48 48 0 1 0 136 184V98.75l69.7 20.91A8 8 0 0 0 216 112V64a8 8 0 0 0-5.7-7.66M88 216a32 32 0 1 1 32-32a32 32 0 0 1-32 32m112-114.75l-64-19.2v-31.3L200 70Z");
}
</style><path class="qq9h6npso"/>`,
		"fallback": "ph:music-note",
	});
}

export default Component;
