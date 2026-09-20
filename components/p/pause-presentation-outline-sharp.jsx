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
		"content": `<style>.uxrblccvi {
  fill: currentColor;
  d: path("M9.808 15.5h1v-7h-1zm3.384 0h1v-7h-1zM3 19V5h18v14zm1-1h16V6H4zm0 0V6z");
}
</style><path class="uxrblccvi"/>`,
		"fallback": "material-symbols-light:pause-presentation-outline-sharp",
	});
}

export default Component;
