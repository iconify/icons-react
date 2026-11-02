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
		"content": `<style>.hk97zz77t {
  fill: currentColor;
  d: path("M3 6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H6a3.004 3.004 0 0 1-3-3Zm3-1a.997.997 0 0 0-1 1v12a1 1 0 0 0 1 1h8V5Z");
}
</style><path class="hk97zz77t"/>`,
		"fallback": "coolicons:panel-right-fill",
	});
}

export default Component;
