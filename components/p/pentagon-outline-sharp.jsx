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
		"content": `<style>.d65oxlv4h {
  fill: currentColor;
  d: path("M7.45 19h9.1l3.075-9.225L12 4.45L4.375 9.775zM6 21L2 9l10-7l10 7l-4 12zm6-9.275");
}
</style><path class="d65oxlv4h"/>`,
		"fallback": "material-symbols:pentagon-outline-sharp",
	});
}

export default Component;
