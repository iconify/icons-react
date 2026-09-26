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
		"content": `<style>.u0zpqxnly {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M5 3L19 3C21.2091 3 23 4.7909 23 7L23 17C23 19.2091 21.2091 21 19 21L5 21C2.7909 21 1 19.2091 1 17L1 7C1 4.7909 2.7909 3 5 3ZM3 8L3 12L5 12C5.5523 12 6 12.4477 6 13C6 14.1046 6.8954 15 8 15C9.1046 15 10 14.1046 10 13C10 12.4477 10.4477 12 11 12L21 12L21 8L3 8Z");
}
</style><path clip-rule="evenodd" class="u0zpqxnly"/>`,
		"fallback": "keyline-icons:wallet-cards-fill",
	});
}

export default Component;
