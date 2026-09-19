import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.opgsi1bcv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m26.242 7.063l3.981 27.636m0 0a7.702 7.702 0 1 1-10.442-6.07M26.376 7l10.68-2.5m.04.054c.448 1.58.896 3.161-.239 4.288s-3.851 1.8-6.568 2.473m-18.03 2.739l3.244 8.744m.599-9.516l2.93 8.242m-8.605-4l8.674-2.618m-7.324 5.968l8.36-2.745");
}
</style><path class="opgsi1bcv"/>`,
		"fallback": "arcticons:tunable",
	});
}

export default Component;
