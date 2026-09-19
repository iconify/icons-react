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
		"content": `<style>.zisgoccru {
  fill: currentColor;
  d: path("M17 13h-5v5h5zM16 2v2H8V2H6v2H3.01L3 22h18V4h-3V2zm3 18H5V9h14z");
}
</style><path class="zisgoccru"/>`,
		"fallback": "ic:sharp-event",
	});
}

export default Component;
