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
		"content": `<style>.ixw6ohbxp {
  fill: var(--svg-color--1f63ff, #1f63ff);
  d: path("M8.993 5.117V18.88L3 13.99zm0 13.766l5.654-4.889l-1.645-2.582H21z");
}
</style><path class="ixw6ohbxp"/>`,
		"fallback": "token-branded:loopring",
	});
}

export default Component;
