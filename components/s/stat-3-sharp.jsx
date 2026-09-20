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
		"content": `<style>.ju2p7768e {
  fill: currentColor;
  d: path("m7.4 20.702l-.708-.708L12 14.687l5.308 5.307l-.708.708l-4.6-4.594zm0-6l-.708-.708L12 8.687l5.308 5.307l-.708.708l-4.6-4.594zm0-6l-.708-.708L12 2.687l5.308 5.307l-.708.708L12 4.108z");
}
</style><path class="ju2p7768e"/>`,
		"fallback": "material-symbols-light:stat-3-sharp",
	});
}

export default Component;
