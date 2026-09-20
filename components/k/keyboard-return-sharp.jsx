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
		"content": `<style>.zfy0qybbd {
  fill: currentColor;
  d: path("M9.308 17.308L4 12l5.308-5.308l.708.708l-4.1 4.1H19v-4h1v5H5.916l4.1 4.1z");
}
</style><path class="zfy0qybbd"/>`,
		"fallback": "material-symbols-light:keyboard-return-sharp",
	});
}

export default Component;
