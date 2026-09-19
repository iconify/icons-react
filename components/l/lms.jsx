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
		"content": `<style>.fm-rj1ujk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M16.92 34.13V8.71L42.08 5.5v29.07m-22.59 3V16l20.09-2.52v17.64m2.5 3.45c0 2.7-3 4.89-6.79 4.89s-6.8-2.19-6.8-4.89s2.86-5.09 6.59-4.64a10.8 10.8 0 0 1 4.5 1.19M19.5 37.61c0 2.7-3 4.89-6.8 4.89s-6.79-2.19-6.79-4.89S8.77 32.52 12.5 33a10.4 10.4 0 0 1 4.42 1.16");
}
</style><path class="fm-rj1ujk"/>`,
		"fallback": "arcticons:lms",
	});
}

export default Component;
