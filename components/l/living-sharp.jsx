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
		"content": `<style>.fo40xib5r {
  fill: currentColor;
  d: path("M3 21V3h18v18zm2.616-3.616h12.769V10.35h-1.25V7H6.865v3.35h-1.25zM6.5 16.5v-5.384h2v3h7v-3h2V16.5zm2.885-3.27v-2.95H7.75V7.886h8.5v2.396h-1.634v2.95z");
}
</style><path class="fo40xib5r"/>`,
		"fallback": "material-symbols-light:living-sharp",
	});
}

export default Component;
