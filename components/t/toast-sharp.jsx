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
		"content": `<style>.znnsddche {
  fill: currentColor;
  d: path("M6 18h12v-2H6zm-3 3V3h18v18z");
}
</style><path class="znnsddche"/>`,
		"fallback": "material-symbols:toast-sharp",
	});
}

export default Component;
