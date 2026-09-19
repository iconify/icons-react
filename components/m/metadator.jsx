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
		"content": `<style>.ldkyobbui {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.5 16.34v-3.493A7.33 7.33 0 0 1 12.845 5.5h22.31a7.33 7.33 0 0 1 7.345 7.345v3.495m0 15.47v3.345a7.33 7.33 0 0 1-7.345 7.345h-22.31A7.33 7.33 0 0 1 5.5 35.185v-3.374m18.504-18.112v20.697m-7.701-17.972v15.303M31.63 16.424v15.303M8.675 18.315v11.422m30.56-11.42V29.74");
}
</style><path class="ldkyobbui"/>`,
		"fallback": "arcticons:metadator",
	});
}

export default Component;
