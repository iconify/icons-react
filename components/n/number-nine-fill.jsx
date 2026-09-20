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
		"content": `<style>.k3ywqbcjw {
  fill: currentColor;
  d: path("M200 24H56a16 16 0 0 0-16 16v176a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V40a16 16 0 0 0-16-16m-33.7 105.62L132.62 188a8 8 0 0 1-13.86-8l16.52-28.61a45 45 0 0 1-7.28.61a44.05 44.05 0 1 1 38.3-22.38M156 108a28 28 0 1 1-28-28a28 28 0 0 1 28 28");
}
</style><path class="k3ywqbcjw"/>`,
		"fallback": "ph:number-nine-fill",
	});
}

export default Component;
