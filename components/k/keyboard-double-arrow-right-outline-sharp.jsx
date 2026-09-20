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
		"content": `<style>.egnef3bkp {
  fill: currentColor;
  d: path("M10.537 12L5.942 7.4l.708-.708L11.958 12L6.65 17.308l-.708-.708zm6.1 0l-4.595-4.6l.708-.708L18.058 12l-5.308 5.308l-.708-.708z");
}
</style><path class="egnef3bkp"/>`,
		"fallback": "material-symbols-light:keyboard-double-arrow-right-outline-sharp",
	});
}

export default Component;
