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
		"content": `<style>.xqr9u7bwd {
  fill: currentColor;
  d: path("M12 3L4 9v12h16V9zm4 13.06L14 15v2H8v-6h6v2l2-1.06z");
}
</style><path class="xqr9u7bwd"/>`,
		"fallback": "ic:sharp-camera-indoor",
	});
}

export default Component;
