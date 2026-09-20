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
		"content": `<style>.d6ca26f4x {
  fill: currentColor;
  d: path("M4 19h3v-8h10v8h3V8.35l-8-3.2l-8 3.2zm-1 1V7.673l9-3.596l9 3.596V20h-5v-8H8v8zm6.558 0v-1.538h1.538V20zm1.673-3v-1.538h1.538V17zm1.673 3v-1.538h1.538V20zM7 11h10z");
}
</style><path class="d6ca26f4x"/>`,
		"fallback": "material-symbols-light:warehouse-outline-sharp",
	});
}

export default Component;
