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
		"content": `<style>.mjfum1ktx {
  fill: var(--svg-color--2669f5, #2669F5);
  d: path("M22 20L12.75 4L3.5 20zM6.25 11.5L10.5 4H2zm11.972 6.382H7.278l5.472-9.466z");
}
</style><path class="mjfum1ktx"/>`,
		"fallback": "token-branded:paraswap",
	});
}

export default Component;
