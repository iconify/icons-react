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
		"content": `<style>.eqtg3_b2j {
  fill: currentColor;
  d: path("M2 20v-2h18V4h2v16zm8-4v-6h8v6z");
}
</style><path class="eqtg3_b2j"/>`,
		"fallback": "material-symbols:picture-in-picture-small-outline-sharp",
	});
}

export default Component;
