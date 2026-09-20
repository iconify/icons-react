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
		"content": `<style>.avuxquz_c {
  fill: currentColor;
  d: path("M4 17.27v-1h10v1zm0-4.77v-1h16v1zm0-4.77v-1h16v1z");
}
</style><path class="avuxquz_c"/>`,
		"fallback": "material-symbols-light:notes-outline-sharp",
	});
}

export default Component;
