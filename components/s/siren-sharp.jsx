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
		"content": `<style>.cfc54hbxp {
  fill: currentColor;
  d: path("M8 13h2v-3q0-.825.588-1.412T12 8V6q-1.65 0-2.825 1.175T8 10zm-6 8v-6h3v-5q0-2.925 2.038-4.962T12 3t4.963 2.038T19 10v5h3v6z");
}
</style><path class="cfc54hbxp"/>`,
		"fallback": "material-symbols:siren-sharp",
	});
}

export default Component;
