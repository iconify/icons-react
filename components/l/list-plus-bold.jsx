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
		"content": `<style>.pr4of2rsv {
  fill: currentColor;
  d: path("M28 64a12 12 0 0 1 12-12h176a12 12 0 0 1 0 24H40a12 12 0 0 1-12-12m12 76h176a12 12 0 0 0 0-24H40a12 12 0 0 0 0 24m104 40H40a12 12 0 0 0 0 24h104a12 12 0 0 0 0-24m88 0h-12v-12a12 12 0 0 0-24 0v12h-12a12 12 0 0 0 0 24h12v12a12 12 0 0 0 24 0v-12h12a12 12 0 0 0 0-24");
}
</style><path class="pr4of2rsv"/>`,
		"fallback": "ph:list-plus-bold",
	});
}

export default Component;
