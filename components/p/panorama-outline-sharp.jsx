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
		"content": `<style>.kelc__9cw {
  fill: currentColor;
  d: path("M3 19V5h18v14zm1-1h16V6H4zm3.5-2h9.154l-2.827-3.77l-2.615 3.308l-1.75-2.115zM4 18V6z");
}
</style><path class="kelc__9cw"/>`,
		"fallback": "material-symbols-light:panorama-outline-sharp",
	});
}

export default Component;
