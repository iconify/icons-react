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
		"content": `<style>.uqm9x7ddj {
  fill: currentColor;
  d: path("M228 40v28a12 12 0 0 1-24 0V52h-16a12 12 0 0 1 0-24h28a12 12 0 0 1 12 12m-12 136a12 12 0 0 0-12 12v16h-16a12 12 0 0 0 0 24h28a12 12 0 0 0 12-12v-28a12 12 0 0 0-12-12M68 204H52v-16a12 12 0 0 0-24 0v28a12 12 0 0 0 12 12h28a12 12 0 0 0 0-24M40 80a12 12 0 0 0 12-12V52h16a12 12 0 0 0 0-24H40a12 12 0 0 0-12 12v28a12 12 0 0 0 12 12m88 128a80 80 0 1 1 80-80a80.09 80.09 0 0 1-80 80m56-80a56 56 0 1 0-56 56a56.06 56.06 0 0 0 56-56m-80-24a16 16 0 1 0 16 16a16 16 0 0 0-16-16m48 0a16 16 0 1 0 16 16a16 16 0 0 0-16-16");
}
</style><path class="uqm9x7ddj"/>`,
		"fallback": "ph:scan-smiley-bold",
	});
}

export default Component;
