import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.v_fw3bc-z {
  fill: currentColor;
  d: path("M17 10a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-3a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2zm-5.826 1A3 3 0 0 0 11 12H4.009C3.448 12 3 12.447 3 13c0 1.309.623 2.283 1.673 2.953C5.743 16.636 7.265 17 9 17c.708 0 1.38-.063 2-.18V17c0 .283.041.556.114.815A12 12 0 0 1 9 18c-1.855 0-3.583-.386-4.865-1.203C2.833 15.967 2 14.69 2 13c0-1.113.903-2 2.009-2zm3.326 1a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1zM9 2a4 4 0 1 1 0 8a4 4 0 0 1 0-8m0 1a3 3 0 1 0 0 6a3 3 0 0 0 0-6");
}
</style><path class="v_fw3bc-z"/>`,
		"fallback": "fluent:person-guest-20-regular",
	});
}

export default Component;
