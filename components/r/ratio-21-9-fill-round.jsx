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
		"content": `<style>.aq1ge0_ym {
  fill: currentColor;
  d: path("M7 7h10a5 5 0 0 1 0 10H7A5 5 0 0 1 7 7");
}
</style><path class="aq1ge0_ym"/>`,
		"fallback": "coolicons:ratio-21-9-fill-round",
	});
}

export default Component;
