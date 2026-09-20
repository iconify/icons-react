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
		"content": `<style>.a1urw2bkn {
  fill: currentColor;
  d: path("M4.616 17q-.691 0-1.153-.462T3 15.378V8.622q0-.697.463-1.16T4.615 7H7.5v4.23h1V7h3v4.23h1V7h3v4.23h1V7h2.885q.69 0 1.152.463T21 8.622v6.756q0 .697-.463 1.16T19.385 17z");
}
</style><path class="a1urw2bkn"/>`,
		"fallback": "material-symbols-light:straighten",
	});
}

export default Component;
