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
		"content": `<style>.r_s0d_m8a {
  fill: currentColor;
  d: path("M3 19V5h18v14zm1-4h16V6H4z");
}
</style><path class="r_s0d_m8a"/>`,
		"fallback": "material-symbols-light:video-label-sharp",
	});
}

export default Component;
