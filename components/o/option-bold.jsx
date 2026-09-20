import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.sn_e-idqo {
  fill: currentColor;
  d: path("M236 192a12 12 0 0 1-12 12h-63.06a19.89 19.89 0 0 1-17.88-11.06L92.58 92H32a12 12 0 0 1 0-24h63.06a19.89 19.89 0 0 1 17.88 11.06L163.42 180H224a12 12 0 0 1 12 12M152 92h72a12 12 0 0 0 0-24h-72a12 12 0 0 0 0 24");
}
</style><path class="sn_e-idqo"/>`,
		"fallback": "ph:option-bold",
	});
}

export default Component;
