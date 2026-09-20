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
		"content": `<style>.km3dhg6lg {
  fill: currentColor;
  d: path("M3 19V5h18v14zM4 8.5h16V6H4zm11.775 5.594L20 10.525V9.5H4v1.725z");
}
</style><path class="km3dhg6lg"/>`,
		"fallback": "material-symbols-light:wallet-outline-sharp",
	});
}

export default Component;
