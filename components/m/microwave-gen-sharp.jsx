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
		"content": `<style>.sgkahhb1a {
  fill: currentColor;
  d: path("M2 20V4h20v16zm3-3h10V7H5zm2-2V9h6v6zm10-6h2V7h-2zm0 4h2v-2h-2zm0 4h2v-2h-2z");
}
</style><path class="sgkahhb1a"/>`,
		"fallback": "material-symbols:microwave-gen-sharp",
	});
}

export default Component;
