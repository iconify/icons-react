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
		"content": `<style>.bqqtzqxvb {
  fill: var(--svg-color--345d9d, #345d9d);
  d: path("m5.734 15.611l-1.609.63l.776-3.116l1.62-.652L8.86 3h5.772l-1.71 6.975l1.586-.642l-.765 3.083l-1.598.653l-.956 4.074h8.685L18.895 21H4.406z");
}
</style><path class="bqqtzqxvb"/>`,
		"fallback": "token-branded:ltc",
	});
}

export default Component;
