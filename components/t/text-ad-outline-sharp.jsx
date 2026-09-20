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
		"content": `<style>.r16isr4rh {
  fill: currentColor;
  d: path("M3 19V5h18v14zm1-1h16V6H4zm0 0V6zm1.73-2.116h12.54v-1H5.73zm0-3.384h12.54v-1H5.73zm0-3.384h8.77v-1H5.73z");
}
</style><path class="r16isr4rh"/>`,
		"fallback": "material-symbols-light:text-ad-outline-sharp",
	});
}

export default Component;
