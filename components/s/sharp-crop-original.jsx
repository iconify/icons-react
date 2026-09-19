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
		"content": `<style>.rhu3uvbis {
  fill: currentColor;
  d: path("M21 3H3v18h18zm-2 16H5V5h14zm-5.04-6.71l-2.75 3.54l-1.96-2.36L6.5 17h11z");
}
</style><path class="rhu3uvbis"/>`,
		"fallback": "ic:sharp-crop-original",
	});
}

export default Component;
