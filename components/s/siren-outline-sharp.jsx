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
		"content": `<style>.e1d64jmyo {
  fill: currentColor;
  d: path("M4 19h16v-2H4zm4-6h2v-3q0-.825.588-1.412T12 8V6q-1.65 0-2.825 1.175T8 10zm-1 2h10v-5q0-2.075-1.463-3.537T12 5T8.463 6.463T7 10zm-5 6v-6h3v-5q0-2.925 2.038-4.962T12 3t4.963 2.038T19 10v5h3v6zm10-6");
}
</style><path class="e1d64jmyo"/>`,
		"fallback": "material-symbols:siren-outline-sharp",
	});
}

export default Component;
