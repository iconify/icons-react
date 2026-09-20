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
		"content": `<style>.wrez5ybmg {
  fill: currentColor;
  d: path("M12 14.708L6.692 9.4l.708-.708l4.6 4.6l4.6-4.6l.708.708z");
}
</style><path class="wrez5ybmg"/>`,
		"fallback": "material-symbols-light:keyboard-arrow-down-outline-sharp",
	});
}

export default Component;
