import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.ok3ggdc_m {
  fill: currentColor;
  d: path("m7 22l-1.5-6h13L17 22zm5-14q0-2.5 1.75-4.25T18 2q0 2.25-1.425 3.9T13 7.9V10h8v5H3v-5h8V7.9q-2.15-.35-3.575-2T6 2q2.5 0 4.25 1.75T12 8");
}
</style><path class="ok3ggdc_m"/>`,
		"fallback": "material-symbols:potted-plant-sharp",
	});
}

export default Component;
