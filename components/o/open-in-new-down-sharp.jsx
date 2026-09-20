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
		"content": `<style>.ty-lzqbvr {
  fill: currentColor;
  d: path("M4 20V4h16v7.616h-1V5H5v14h6.616v1zm10 0v-1h4.312L9.089 9.777l.688-.688L19 18.287V14h1v6z");
}
</style><path class="ty-lzqbvr"/>`,
		"fallback": "material-symbols-light:open-in-new-down-sharp",
	});
}

export default Component;
