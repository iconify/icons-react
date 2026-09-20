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
		"content": `<style>.tk4bf7bon {
  fill: currentColor;
  d: path("M4 21v-2H2V4h20v15h-2v2h-1l-.65-2H5.675L5 21zm0-4h16V6H4zm8-5.5");
}
</style><path class="tk4bf7bon"/>`,
		"fallback": "material-symbols:tv-gen-outline-sharp",
	});
}

export default Component;
