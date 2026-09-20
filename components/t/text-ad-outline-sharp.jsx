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
		"content": `<style>.ayg-oyf_t {
  fill: currentColor;
  d: path("M2 20V4h20v16zm2-2h16V6H4zm0 0V6zm1-1h14v-2H5zm0-4h14v-2H5zm0-4h10V7H5z");
}
</style><path class="ayg-oyf_t"/>`,
		"fallback": "material-symbols:text-ad-outline-sharp",
	});
}

export default Component;
