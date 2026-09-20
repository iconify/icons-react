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
		"content": `<style>.u0djymbaq {
  fill: currentColor;
  d: path("M11 18h2v-3h3v-2h-3v-3h-2v3H8v2h3zm-7 4V2h10l6 6v14zm9-13V4H6v16h12V9zM6 4v5zv16z");
}
</style><path class="u0djymbaq"/>`,
		"fallback": "material-symbols:note-add-outline-sharp",
	});
}

export default Component;
