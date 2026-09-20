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
		"content": `<style>.bh0kuvzvj {
  fill: currentColor;
  d: path("M3 21V9h18v12zm1-1h16V10H4zm6.5-1.923L15.116 15L10.5 11.923zm-6-10.846v-1h15v1zm3-2.77v-1h9v1zM4 20V10z");
}
</style><path class="bh0kuvzvj"/>`,
		"fallback": "material-symbols-light:subscriptions-outline-sharp",
	});
}

export default Component;
