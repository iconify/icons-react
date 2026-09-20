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
		"content": `<style>.r605z-emy {
  fill: currentColor;
  d: path("M7 20v-1H3v-6H1v-2h2V5h4V4h2v16zm-2-3h2V7H5zm10 3v-4h-4v-2h4v-4h-4V8h4V4h2v1h4v6h2v2h-2v6h-4v1zm2-3h2V7h-2zm0-5");
}
</style><path class="r605z-emy"/>`,
		"fallback": "material-symbols:plug-connect-outline-sharp",
	});
}

export default Component;
