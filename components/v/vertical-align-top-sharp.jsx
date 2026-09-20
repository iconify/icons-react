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
		"content": `<style>.a8sjy7wwc {
  fill: currentColor;
  d: path("M4 5V3h16v2zm7 16V10.8l-2.6 2.6L7 12l5-5l5 5l-1.4 1.4l-2.6-2.6V21z");
}
</style><path class="a8sjy7wwc"/>`,
		"fallback": "material-symbols:vertical-align-top-sharp",
	});
}

export default Component;
