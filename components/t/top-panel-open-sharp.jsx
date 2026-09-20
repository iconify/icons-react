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
		"content": `<style>.ixncu1bfg {
  fill: currentColor;
  d: path("m12 15.596l3.173-3.192H8.827zM5 19h14V9H5zm-1 1V4h16v16z");
}
</style><path class="ixncu1bfg"/>`,
		"fallback": "material-symbols-light:top-panel-open-sharp",
	});
}

export default Component;
