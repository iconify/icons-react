import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.ie3-8eb6j {
  fill: currentColor;
  d: path("M10.059 2.445a1.5 1.5 0 0 0-2.386.354l-2.02 3.79l-2.811.937a.5.5 0 0 0-.196.828L4.793 10.5l-2.647 2.647L2 14l.854-.146L5.5 11.207l2.146 2.147a.5.5 0 0 0 .828-.196l.937-2.81l3.779-2.024a1.5 1.5 0 0 0 .354-2.38zm-1.504.824a.5.5 0 0 1 .796-.118l3.485 3.498a.5.5 0 0 1-.118.794L8.764 9.559a.5.5 0 0 0-.238.283l-.744 2.233l-3.856-3.856l2.232-.744a.5.5 0 0 0 .283-.24z");
}
</style><path class="ie3-8eb6j"/>`,
		"fallback": "fluent:pin-16-regular",
	});
}

export default Component;
