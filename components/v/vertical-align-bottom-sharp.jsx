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
		"content": `<style>.v1f6mbbnl {
  fill: currentColor;
  d: path("M5 20v-1h14v1zm7-3.692L7.692 12l.708-.708l3.1 3.1V4h1v10.392l3.1-3.1l.708.708z");
}
</style><path class="v1f6mbbnl"/>`,
		"fallback": "material-symbols-light:vertical-align-bottom-sharp",
	});
}

export default Component;
