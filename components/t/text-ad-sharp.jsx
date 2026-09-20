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
		"content": `<style>.fsia2hbyl {
  fill: currentColor;
  d: path("M2 20V4h20v16zm3-3h14v-2H5zm0-4h14v-2H5zm0-4h10V7H5z");
}
</style><path class="fsia2hbyl"/>`,
		"fallback": "material-symbols:text-ad-sharp",
	});
}

export default Component;
