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
		"content": `<style>.dqrpu-1sm {
  fill: currentColor;
  d: path("M10 13.5h3.48v-1H10zm0-3h6.962v-1H10zm0-3h6.962v-1H10zM6.5 17V3h14v14zm-3 3V6.616h1V19h12.385v1z");
}
</style><path class="dqrpu-1sm"/>`,
		"fallback": "material-symbols-light:library-books-sharp",
	});
}

export default Component;
