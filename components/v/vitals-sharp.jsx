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
		"content": `<style>.ssvn3j4no {
  fill: currentColor;
  d: path("M1 13v-2h5.7L9 17.1l6-15.825L18.7 11H23v2h-5.7L15 6.9L9 22.725L5.3 13z");
}
</style><path class="ssvn3j4no"/>`,
		"fallback": "material-symbols:vitals-sharp",
	});
}

export default Component;
