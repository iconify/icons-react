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
		"content": `<style>.jesbc1bqb {
  fill: currentColor;
  d: path("M102 104a6 6 0 0 1-6 6H64a6 6 0 0 1 0-12h32a6 6 0 0 1 6 6m-6 26H64a6 6 0 0 0 0 12h32a6 6 0 0 0 0-12m0 32H64a6 6 0 0 0 0 12h32a6 6 0 0 0 0-12m134-82v112a14 14 0 0 1-14 14H40a14 14 0 0 1-14-14V72a6 6 0 0 1 4.28-5.75l160-48a6 6 0 0 1 3.44 11.5L72.88 66H216a14 14 0 0 1 14 14m-12 0a2 2 0 0 0-2-2H38v114a2 2 0 0 0 2 2h176a2 2 0 0 0 2-2Zm-20 56a38 38 0 1 1-38-38a38 38 0 0 1 38 38m-12 0a26 26 0 1 0-26 26a26 26 0 0 0 26-26");
}
</style><path class="jesbc1bqb"/>`,
		"fallback": "ph:radio-light",
	});
}

export default Component;
