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
		"content": `<style>.iyph3bccs {
  fill: currentColor;
  d: path("m8.277 19.25l-4.461.935l.934-4.462zm0 0L4.75 15.723L16.875 3.598l3.527 3.527zm.2-1.602L19 7.125L16.875 5L6.352 15.523z");
}
</style><path class="iyph3bccs"/>`,
		"fallback": "material-symbols-light:stylus-outline-sharp",
	});
}

export default Component;
