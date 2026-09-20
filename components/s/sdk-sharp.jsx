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
		"content": `<style>.r-1eisb1t {
  fill: currentColor;
  d: path("M4 20V6.627L5.78 4.5h12.44L20 6.627V20zM5.4 6.5h13.2l-.85-1H6.25zm10.53 7l-2.1 2.1l.72.72l2.82-2.82l-2.82-2.82l-.72.72zm-7.81 0l2.1-2.1l-.72-.72l-2.82 2.82l2.82 2.82l.72-.72z");
}
</style><path class="r-1eisb1t"/>`,
		"fallback": "material-symbols-light:sdk-sharp",
	});
}

export default Component;
