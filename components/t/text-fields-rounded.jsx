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
		"content": `<style>.csqw5cc0o {
  fill: currentColor;
  d: path("M8.11 18.82q-.187-.179-.187-.435V6.25H3.635q-.265 0-.45-.184T3 5.619t.18-.441T3.615 5h9.846q.265 0 .45.18t.185.438t-.18.444t-.435.188H9.173v12.116q0 .264-.18.449T8.556 19t-.445-.18m8.875 0q-.178-.179-.178-.436v-7.23H14.48q-.265 0-.45-.184t-.185-.447t.18-.441t.436-.178h5.904q.264 0 .449.18t.185.438t-.18.444t-.435.188h-2.346v7.23q0 .257-.18.436q-.18.18-.438.18q-.257 0-.435-.18");
}
</style><path class="csqw5cc0o"/>`,
		"fallback": "material-symbols-light:text-fields-rounded",
	});
}

export default Component;
