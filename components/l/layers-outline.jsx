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
		"content": `<style>.qceh5szfu {
  fill: currentColor;
  d: path("m12 18.742l-7.385-5.73l.804-.635L12 17.462l6.58-5.085l.805.635zm0-3.819l-7.385-5.73L12 3.461l7.385 5.73zm0-1.28l5.75-4.45L12 4.742l-5.75 4.45z");
}
</style><path class="qceh5szfu"/>`,
		"fallback": "material-symbols-light:layers-outline",
	});
}

export default Component;
