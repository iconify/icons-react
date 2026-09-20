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
		"content": `<style>.vhdkt4lck {
  fill: currentColor;
  d: path("m12.2 13.32l4.958-4.959l-.708-.719l-4.25 4.25l-2.15-2.138l-.708.708zM6.5 17V3h14v14zm-3 3V6.616h1V19h12.385v1z");
}
</style><path class="vhdkt4lck"/>`,
		"fallback": "material-symbols-light:library-add-check-sharp",
	});
}

export default Component;
