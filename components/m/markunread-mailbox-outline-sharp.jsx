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
		"content": `<style>.mjsg4kvxq {
  fill: currentColor;
  d: path("M6.616 14v-4H4v10h16V10H10V9h11v12H3V9h3.616V3h6.5v3.616h-5.5V14zM4 10v4zv10z");
}
</style><path class="mjsg4kvxq"/>`,
		"fallback": "material-symbols-light:markunread-mailbox-outline-sharp",
	});
}

export default Component;
