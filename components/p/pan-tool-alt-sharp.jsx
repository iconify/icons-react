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
		"content": `<style>.xt5l1rbts {
  fill: currentColor;
  d: path("M8.525 21L1.15 11.925l1.775-1.7L7 13.075V2h2v9h2V6h2v5h2V7h2v4h2V9h2v12z");
}
</style><path class="xt5l1rbts"/>`,
		"fallback": "material-symbols:pan-tool-alt-sharp",
	});
}

export default Component;
