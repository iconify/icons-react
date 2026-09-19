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
		"content": `<style>.wl3n3ac2c {
  fill: currentColor;
  d: path("M21 7.28V5c0-1.1-.9-2-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2v-2.28A2 2 0 0 0 22 15V9a2 2 0 0 0-1-1.72M20 9v6h-7V9zM5 19V5h14v2h-6c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h6v2z");
}

.xp85f9bzt {
  cx: 16px;
  cy: 12px;
  r: 1.5px;
  fill: currentColor;
}
</style><path class="wl3n3ac2c"/><circle class="xp85f9bzt"/>`,
		"fallback": "ic:outline-account-balance-wallet",
	});
}

export default Component;
