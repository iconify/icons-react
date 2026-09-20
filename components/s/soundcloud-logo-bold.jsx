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
		"content": `<style>.zpwkrlrgp {
  fill: currentColor;
  d: path("M32 120v48a12 12 0 0 1-24 0v-48a12 12 0 0 1 24 0m28-36a12 12 0 0 0-12 12v96a12 12 0 0 0 24 0V96a12 12 0 0 0-12-12m40-40a12 12 0 0 0-12 12v136a12 12 0 0 0 24 0V56a12 12 0 0 0-12-12m122.34 59.33A84 84 0 0 0 140 36a12 12 0 0 0 0 24a59.78 59.78 0 0 1 59.7 53.93a12 12 0 0 0 9.66 10.58A28 28 0 0 1 204 180h-64a12 12 0 0 0 0 24h64a52 52 0 0 0 18.34-100.67");
}
</style><path class="zpwkrlrgp"/>`,
		"fallback": "ph:soundcloud-logo-bold",
	});
}

export default Component;
