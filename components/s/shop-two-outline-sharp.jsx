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
		"content": `<style>.s073occxk {
  fill: currentColor;
  d: path("m12 15l5.5-3.5L12 8zM1 22V9h2v11h17v2zm4-4V5h5V1h8v4h5v13zm7-13h4V3h-4zM7 16h14V7H7zm0-9v9z");
}
</style><path class="s073occxk"/>`,
		"fallback": "material-symbols:shop-two-outline-sharp",
	});
}

export default Component;
