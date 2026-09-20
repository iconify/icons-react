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
		"content": `<style>.bxa7ohbuw {
  fill: currentColor;
  d: path("M3 21V3h18v18zm2-2h14V5H5zm0 0V5zm8-2h2V7h-2v4h-2V7H9v6h4z");
}
</style><path class="bxa7ohbuw"/>`,
		"fallback": "material-symbols:looks-4-outline-sharp",
	});
}

export default Component;
