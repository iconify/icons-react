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
		"content": `<style>.dxksp7bmh {
  fill: currentColor;
  d: path("M200 24H56a16 16 0 0 0-16 16v176a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V40a16 16 0 0 0-16-16m-40 152a8 8 0 0 1 0 16H96a8 8 0 0 1-5.79-13.52L145.9 120a24 24 0 0 0-35.73-32a23.3 23.3 0 0 0-3.17 4.38a8 8 0 0 1-14-7.77a40.2 40.2 0 0 1 5.28-7.38a40 40 0 0 1 59.45 53.54l-.16.16L114.66 176Z");
}
</style><path class="dxksp7bmh"/>`,
		"fallback": "ph:number-two-fill",
	});
}

export default Component;
