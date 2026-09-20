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
		"content": `<style>.lzm4vobuu {
  fill: currentColor;
  d: path("M13 13.5h1v-3h3v-1h-3v-3h-1v3h-3v1h3zM6.5 17V3h14v14zm-3 3V6.616h1V19h12.385v1z");
}
</style><path class="lzm4vobuu"/>`,
		"fallback": "material-symbols-light:library-add-sharp",
	});
}

export default Component;
