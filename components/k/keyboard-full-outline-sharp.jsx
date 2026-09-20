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
		"content": `<style>.kpr2rkb5k {
  fill: currentColor;
  d: path("M2 20V4h20v16zm2-6h16V6H4z");
}
</style><path class="kpr2rkb5k"/>`,
		"fallback": "material-symbols:keyboard-full-outline-sharp",
	});
}

export default Component;
