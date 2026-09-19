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
		"content": `<style>.dfh4vob0k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.5 10.844h37v25.565h-37zm10.991 20.424h15.018m-10.562-8.444h6.106M24 19.77v6.107m0-19.146v4.113m0 25.565v4.86m-4.195-4.862l-3.55 4.855m15.49 0l-3.55-4.855");
}
</style><path class="dfh4vob0k"/>`,
		"fallback": "arcticons:vulcan-diary",
	});
}

export default Component;
