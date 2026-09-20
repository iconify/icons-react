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
		"content": `<style>.ov0zgskwm {
  fill: currentColor;
  d: path("M8.385 17.616h7.23v-4.424h-7.23zm0-6.808h7.23V6.385h-7.23zM5 21V3h14v18z");
}
</style><path class="ov0zgskwm"/>`,
		"fallback": "material-symbols-light:splitscreen-portrait-sharp",
	});
}

export default Component;
