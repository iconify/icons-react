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
		"content": `<style>.zj6t3_bfu {
  fill: currentColor;
  d: path("M192 28H64a12 12 0 0 0-12 12v176a12 12 0 0 0 12 12h128a12 12 0 0 0 12-12V40a12 12 0 0 0-12-12m4 188a4 4 0 0 1-4 4H64a4 4 0 0 1-4-4V40a4 4 0 0 1 4-4h128a4 4 0 0 1 4 4ZM120 76a8 8 0 1 1 8 8a8 8 0 0 1-8-8m8 40a36 36 0 1 0 36 36a36 36 0 0 0-36-36m0 64a28 28 0 1 1 28-28a28 28 0 0 1-28 28");
}
</style><path class="zj6t3_bfu"/>`,
		"fallback": "ph:speaker-hifi-thin",
	});
}

export default Component;
