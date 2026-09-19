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
		"content": `<style>.z5slxv2wc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M20.408 28.613a7.97 7.97 0 1 1-7.928-7.271m7.787 0c1.904 0 7.322 2.167 7.322 8.568a7.97 7.97 0 1 0 3.99-7.586l-6.644-11.605h-4.526m-.142 14.208q3.17.527 3.889 3.575");
}
</style><path class="z5slxv2wc"/>`,
		"fallback": "arcticons:ridemovi",
	});
}

export default Component;
