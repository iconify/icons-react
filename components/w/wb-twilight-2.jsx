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
		"content": `<style>.etb2r5bmm {
  fill: currentColor;
  d: path("M2 20v-2h20v2zm3-4q0-2.925 2.038-4.962T12 9t4.963 2.038T19 16z");
}
</style><path class="etb2r5bmm"/>`,
		"fallback": "material-symbols:wb-twilight-2",
	});
}

export default Component;
