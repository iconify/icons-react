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
		"content": `<style>.tyjztabgl {
  fill: currentColor;
  d: path("M252 180a40 40 0 0 1-68.57 28a12 12 0 1 1 17.14-16.79A16 16 0 1 0 212 164a12 12 0 0 1-9.83-18.88L217 124h-25a12 12 0 0 1 0-24h48a12 12 0 0 1 9.83 18.88l-18.34 26.2A40 40 0 0 1 252 180M144 44a12 12 0 0 0-12 12v48H52V56a12 12 0 0 0-24 0v120a12 12 0 0 0 24 0v-48h80v48a12 12 0 0 0 24 0V56a12 12 0 0 0-12-12");
}
</style><path class="tyjztabgl"/>`,
		"fallback": "ph:text-h-three-bold",
	});
}

export default Component;
