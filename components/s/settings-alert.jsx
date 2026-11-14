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
		"content": `<style>.hq7owftnl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m10.474 4.912l.261-2.327h2.53l.261 2.327l2.407.997l1.83-1.461l1.789 1.789l-1.461 1.83l.997 2.407l2.327.261v2.53l-2.327.261l-.997 2.407l1.461 1.83l-1.789 1.789l-1.83-1.461l-2.407.997l-.261 2.327h-2.53l-.261-2.327l-2.407-.997l-1.83 1.461l-1.789-1.789l1.461-1.83l-.997-2.407l-2.327-.261v-2.53l2.327-.261l.997-2.407l-1.461-1.83l1.789-1.789l1.83 1.461ZM12 8.75v3.75m0 2.75h.01");
}
</style><path class="hq7owftnl"/>`,
		"fallback": "uix-sharp:settings-alert",
	});
}

export default Component;
