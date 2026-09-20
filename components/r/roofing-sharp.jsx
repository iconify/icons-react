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
		"content": `<style>.z1suvp8my {
  fill: currentColor;
  d: path("M9.385 19v-5.23h5.23V19zm-6.781-6.77L2 11.44L12 4l4.346 3.223V5h1.885v3.62l3.788 2.819l-.603.792L12 5.256z");
}
</style><path class="z1suvp8my"/>`,
		"fallback": "material-symbols-light:roofing-sharp",
	});
}

export default Component;
