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
		"content": `<style>.trxgcp64o {
  fill: currentColor;
  d: path("M3 7a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1m0 6a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1m6.293 5.293a1 1 0 1 0 1.414 1.414L12 18.414l1.293 1.293a1 1 0 0 0 1.414-1.414l-2-2a1 1 0 0 0-1.414 0z");
}
</style><path class="trxgcp64o"/>`,
		"fallback": "fluent:text-add-space-after-24-filled",
	});
}

export default Component;
