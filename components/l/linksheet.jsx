import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.y7himrbyy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m17.253 23.954l14.475.037m-11.096 8.69h-6.96a8.681 8.681 0 1 1 0-17.362h6.644m8.034 0h6.96a8.681 8.681 0 1 1 0 17.362h-6.645");
}
</style><path class="y7himrbyy"/>`,
		"fallback": "arcticons:linksheet",
	});
}

export default Component;
