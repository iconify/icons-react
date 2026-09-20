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
		"content": `<style>.ldnwg1bsy {
  fill: currentColor;
  d: path("M3 21V2h2v2h14V2h2v19h-2V10H5v11zm8 0v-3H8v-2h8v2h-3v3z");
}
</style><path class="ldnwg1bsy"/>`,
		"fallback": "material-symbols:pergola-sharp",
	});
}

export default Component;
