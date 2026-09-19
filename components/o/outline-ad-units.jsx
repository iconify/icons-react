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
		"content": `<style>.i4dnfxb_d {
  fill: currentColor;
  d: path("M16 7H8v2h8z");
}

.lzk4-kbrd {
  fill: currentColor;
  d: path("M17 1H7c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2M7 4V3h10v1zm0 14V6h10v12zm0 3v-1h10v1z");
}
</style><path class="lzk4-kbrd"/><path class="i4dnfxb_d"/>`,
		"fallback": "ic:outline-ad-units",
	});
}

export default Component;
