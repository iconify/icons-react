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
		"content": `<style>.y4-lehbci {
  fill: currentColor;
  d: path("M6.5 9H8v6H6.5v-2.5h-2V15H3V9h1.5v2h2zm9 6h5v-3.5H17v-1h2v.5h1.5V9h-5v3.5H19v1h-2V13h-1.5zM14 15v-1.5h-2.5V9H10v6z");
}
</style><path class="y4-lehbci"/>`,
		"fallback": "ic:sharp-hls",
	});
}

export default Component;
