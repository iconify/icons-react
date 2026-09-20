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
		"content": `<style>.q09py2osy {
  fill: currentColor;
  d: path("M3 20V7.673l9-3.596l9 3.596V20h-5v-8H8v8zm6.558 0v-1.538h1.538V20zm1.673-3v-1.538h1.538V17zm1.673 3v-1.538h1.538V20z");
}
</style><path class="q09py2osy"/>`,
		"fallback": "material-symbols-light:warehouse-sharp",
	});
}

export default Component;
