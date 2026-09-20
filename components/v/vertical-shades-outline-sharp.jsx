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
		"content": `<style>.ass1g5b6l {
  fill: currentColor;
  d: path("M3 20v-1h2V4h14v15h2v1zm3-1h2.75V5H6zm3.75 0h4.5V5h-4.5zm5.5 0H18V5h-2.75zM6 19V5zm12 0V5z");
}
</style><path class="ass1g5b6l"/>`,
		"fallback": "material-symbols-light:vertical-shades-outline-sharp",
	});
}

export default Component;
