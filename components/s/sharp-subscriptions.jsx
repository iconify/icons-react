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
		"content": `<style>.jo3g7fr_f {
  fill: currentColor;
  d: path("M20 8H4V6h16zm-2-6H6v2h12zm4 8v12H2V10zm-6 6l-6-3.27v6.53z");
}
</style><path class="jo3g7fr_f"/>`,
		"fallback": "ic:sharp-subscriptions",
	});
}

export default Component;
