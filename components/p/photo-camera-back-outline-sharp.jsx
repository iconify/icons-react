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
		"content": `<style>.niczw378o {
  fill: currentColor;
  d: path("M3 20V6h4.573l1.85-2h5.154l1.85 2H21v14zm1-1h16V7h-4.011l-1.845-2H9.856L8.012 7H4zm3.5-2.384h9.154l-2.827-3.77l-2.615 3.308l-1.75-2.115z");
}
</style><path class="niczw378o"/>`,
		"fallback": "material-symbols-light:photo-camera-back-outline-sharp",
	});
}

export default Component;
