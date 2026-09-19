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
		"content": `<style>.nca-s0bis {
  fill: currentColor;
  d: path("M12 8v7l5.5-3.5z");
}

.vcg6jsbkc {
  fill: currentColor;
  d: path("M3 9H1v11c0 1.11.89 2 2 2h16v-2H3z");
}

.wssbh_b2d {
  fill: currentColor;
  d: path("M18 5V3c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H5v11c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2V5zm-6-2h4v2h-4zm9 13H7V7h14z");
}
</style><path class="vcg6jsbkc"/><path class="wssbh_b2d"/><path class="nca-s0bis"/>`,
		"fallback": "ic:outline-shop-2",
	});
}

export default Component;
