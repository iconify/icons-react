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
		"content": `<style>.qerl4db3i {
  fill: currentColor;
  d: path("M2 22L22 2v6h-2V6.825L6.825 20H18v2zm18-4v-8h2v8zm2 2v2h-2v-2z");
}
</style><path class="qerl4db3i"/>`,
		"fallback": "material-symbols:signal-cellular-connected-no-internet-0-bar-sharp",
	});
}

export default Component;
