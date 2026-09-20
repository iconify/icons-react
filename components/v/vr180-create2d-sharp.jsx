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
		"content": `<style>.ijniofbjy {
  fill: currentColor;
  d: path("M10.385 21V10.385H21V21zm2.5-2.192h6.23l-1.915-2.5l-1.7 2.25l-1.2-1.65zM8 16.712q-2.252-.656-3.626-2.507T3 10q0-2.931 2.034-4.966Q7.07 3 10 3q2.354 0 4.205 1.374T16.712 8H8z");
}
</style><path class="ijniofbjy"/>`,
		"fallback": "material-symbols-light:vr180-create2d-sharp",
	});
}

export default Component;
